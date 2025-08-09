import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import Lifespan from 'lifespan';
import {
	monthlyConst,
	annualConst,
	teamMonthlyConst,
	teamAnnualConst,
} from '../data/plans.data';

import LocalClient from '../stores/local-client.stores';
import Log from '../services/log.services';

import InputNumber from './shared/input-number.components';
import PricingItem from './shared/pricing-item.components';
import Price from './shared/price.components';
import Modal from './shared/modal.components';
import getCurrency from '../helpers/currency.helpers';
import withCountry from './shared/with-country.components';

const getContactMessage = count => `
Hi! I am interested in subscribing to a company plan for ${count} licences.
I would like more informations before subscribing.
`;

class GoProModal extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			billing: 'annually',
			teamCount: 1,
		};

		this.goSubscribe = this.goSubscribe.bind(this);
		this.goSubscribeTeam = this.goSubscribeTeam.bind(this);
		this.switchMonthlyBilling = this.switchMonthlyBilling.bind(this);
		this.switchAnnualBilling = this.switchAnnualBilling.bind(this);
		this.updateTeamCount = this.updateTeamCount.bind(this);
		this.openIntercomChat = this.openIntercomChat.bind(this);
	}

	async componentDidMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					billing: head.toJS().d.goProModalBilling
						? head.toJS().d.goProModalBilling
						: 'annually',
				});
			})
			.onDelete(() => {
				this.setState({billing: 'annually'});
			});
		this.client
			.getStore('/userStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					hasBeenSubscribing: head.toJS().d.hasBeenSubscribing,
				});
			})
			.onDelete(() => {
				this.setState({hasBeenSubscribing: false});
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	goSubscribe() {
		this.client.dispatchAction('/store-value', {openGoProModal: false});
		this.props.router.push({
			pathname: '/account/subscribe',
			query: {
				plan:
					this.state.billing === 'monthly'
						? monthlyConst.prefix
						: annualConst.prefix,
			},
		});
		window.Intercom('trackEvent', 'openSubscribeFromGoPro');
		Log.ui('Subscribe.FromFile');
	}

	goSubscribeTeam() {
		const {billing, teamCount} = this.state;

		this.client.dispatchAction('/store-value', {openGoProModal: false});
		this.props.router.push({
			pathname: '/account/subscribe',
			query: {
				plan:
					billing === 'monthly'
						? teamMonthlyConst.prefix
						: teamAnnualConst.prefix,
				quantity: teamCount,
			},
		});
		window.Intercom('trackEvent', 'openSubscribeFromGoPro');
		Log.ui('Subscribe.FromFile');
	}

	switchMonthlyBilling() {
		this.client.dispatchAction('/store-value', {
			goProModalBilling: 'monthly',
		});
	}

	switchAnnualBilling() {
		this.client.dispatchAction('/store-value', {
			goProModalBilling: 'annually',
		});
	}

	updateTeamCount(value) {
		this.setState({teamCount: parseInt(value, 10)});
	}

	openIntercomChat(e) {
		e.preventDefault();

		window.Intercom('trackEvent', 'clickedOnContactUsFromGoProModal');
		window.Intercom('showNewMessage', getContactMessage(this.state.teamCount));
	}

	render() {
		const {billing, teamCount, hasBeenSubscribing} = this.state;
		const teamPrice
			= billing === 'annually'
				? teamAnnualConst.monthlyPrice * teamCount
				: teamMonthlyConst.monthlyPrice * teamCount;
		const proPrice
			= billing === 'annually' ? annualConst.monthlyPrice : monthlyConst.price;
		const currency = getCurrency(this.props.country);

		return (
			<Modal propName={this.props.propName}>
				<div className="modal-container-content">
					<div className="pricing-switch">
						<div
							className={`pricing-switch-item ${
								this.state.billing === 'monthly' ? 'is-active' : ''
							}`}
							onClick={this.switchMonthlyBilling}
							role="button"
						>
							Monthly billing
						</div>
						<div
							className={`pricing-switch-item ${
								this.state.billing === 'annually' ? 'is-active' : ''
							}`}
							onClick={this.switchAnnualBilling}
							role="button"
						>
							Annual billing
						</div>
					</div>

					<div className="pricing">
						<PricingItem
							title="Pro"
							description="Just right for freelancer and independant graphic designer"
							priceInfo={
								this.state.billing === 'monthly'
									? 'Try it now, without commitment!'
									: 'Billed annually.'
							}
							currency={currency}
							amount={proPrice}
						>
							<ul className="pricing-item-features">
								<li className="pricing-item-feature">48h support</li>
								<li className="pricing-item-feature">Full-range parameters</li>
								<li className="pricing-item-feature">Unlimited font exports</li>
								<li className="pricing-item-feature">Manual editing</li>
								<li className="pricing-item-feature">
									Glyph individualization
								</li>
								<li className="pricing-item-feature">Web preview extension</li>
								<li className="pricing-item-feature">
									<br />
								</li>
								<li className="pricing-item-feature">
									<br />
								</li>
								<li className="pricing-item-feature">&nbsp;</li>
							</ul>
							<div
								className="pricing-item-cta"
								onClick={this.goSubscribe}
								role="button"
							>
								Go pro
							</div>
						</PricingItem>

						<PricingItem
							title="Team"
							description={
								<div className="pricing-item-subtitle-price-info">
									Great for teams and growing businesses.<br />
									<a
										href={`mailto:account@prototypo.io?subject=Company plan&body=${encodeURI(
											getContactMessage(teamCount),
										)}`}
										className="account-email"
										onClick={this.openIntercomChat}
									>
										Contact us
									</a>{' '}
									for more informations!
								</div>
							}
							priceInfo={
								<div className="pricing-item-subtitle-price-info team">
									<InputNumber
										className="pricing-item-subtitle-price-info team"
										min={1}
										max={100}
										value={teamCount}
										onChange={this.updateTeamCount}
										controls
									/>
								</div>
							}
							currency={currency}
							amount={teamPrice}
						>
							<ul className="pricing-item-features">
								<li className="pricing-item-feature">24h premium support</li>
								<li className="pricing-item-feature">Full-range parameters</li>
								<li className="pricing-item-feature">Unlimited font exports</li>
								<li className="pricing-item-feature">Manual editing</li>
								<li className="pricing-item-feature">
									Glyph individualization
								</li>
								<li className="pricing-item-feature">Web preview extension</li>
								<li className="pricing-item-feature">Team management</li>
								<li className="pricing-item-feature">User roles</li>
								<li className="pricing-item-feature">Kickoff course</li>
							</ul>
							{teamCount <= 10 ? (
								<div
									className="pricing-item-cta"
									onClick={this.goSubscribeTeam}
								>
									Create your team
								</div>
							) : (
								<div
									className="pricing-item-cta"
									onClick={this.openIntercomChat}
								>
									Get in touch
								</div>
							)}
						</PricingItem>
					</div>
				</div>
			</Modal>
		);
	}
}

GoProModal.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withRouter(withCountry(GoProModal));
