import React from 'react';
import {graphql, gql, compose} from 'react-apollo';
import {withRouter} from 'react-router';
import pleaseWait from 'please-wait';
import Lifespan from 'lifespan';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Joyride from 'react-joyride';

import LocalClient from '../stores/local-client.stores.jsx';

import Topbar from './topbar/topbar.components.jsx';
import Toolbar from './toolbar/toolbar.components.jsx';
import Workboard from './workboard.components.jsx';
import ExportAs from './export-as.components.jsx';
import HostVariantModal from './familyVariant/host-variant-modal.components';
import CreateVariantModal from './familyVariant/create-variant-modal.components.jsx';
import CreateAcademyModal from './academy/create-academy-modal.components.jsx';
import ChangeNameFamily from './familyVariant/change-name-family.components.jsx';
import ChangeNameVariant from './familyVariant/change-name-variant.components.jsx';
import DuplicateVariant from './familyVariant/duplicate-variant.components.jsx';
import GoProModal from './go-pro-modal.components.jsx';

import {
	buildTutorialSteps,
	handleNextStep,
	handleClosed,
} from '../helpers/joyride.helpers.js';

class Dashboard extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			joyrideSteps: [],
			uiJoyrideTutorialValue: false,
			firstTimeFile: undefined,
			firstTimeCollection: undefined,
			firstTimeIndivCreate: undefined,
			firstTimeIndivEdit: undefined,
			firstTimeAcademyModal: undefined,
			firstTimeAcademyJoyride: undefined,
		};

		// function bindings
		this.joyrideCallback = this.joyrideCallback.bind(this);
	}

	async componentDidMount() {
		pleaseWait.instance.finish();

		this._isMounted = true;
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		const prototypoStore = await this.client.fetch('/prototypoStore');

		if (this._isMounted) {
			this.setState({
				joyrideSteps: [],
				firstTimeFile: prototypoStore.head.toJS().firstTimeFile,
				firstTimeCollection: prototypoStore.head.toJS().firstTimeCollection,
				firstTimeIndivCreate: prototypoStore.head.toJS().firstTimeIndivCreate,
				firstTimeIndivEdit: prototypoStore.head.toJS().firstTimeIndivEdit,
				firstTimeAcademyModal: prototypoStore.head.toJS().firstTimeAcademyModal,
				firstTimeAcademyJoyride: prototypoStore.head.toJS()
					.firstTimeAcademyJoyride,
			});
		}

		let firstContactTimeoutMade = false;

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				if (this.props.library && this.props.library.length <= 0) {
					this.props.router.push('/library/home');
					return;
				}

				if (!firstContactTimeoutMade && !this.props.firstContactMade) {
					firstContactTimeoutMade = true;
					setTimeout(() => {
						window.Intercom('update', {
							first_session_at: new Date(),
						});
						this.props.setFirstContact();
					}, 300000);
				}

				if (this._isMounted) {
					this.setState({
						openVariantModal: head.toJS().d.openVariantModal,
						familySelectedVariantCreation: head.toJS().d
							.familySelectedVariantCreation,
						openChangeFamilyNameModal: head.toJS().d.openChangeFamilyNameModal,
						openHostVariantModal: head.toJS().d.openHostVariantModal,
						openChangeVariantNameModal: head.toJS().d.openChangeVariantNameModal,
						openDuplicateVariantModal: head.toJS().d.openDuplicateVariantModal,
						openGoProModal: head.toJS().d.openGoProModal,
						step: head.toJS().d.uiOnboardstep,
						indiv: head.toJS().d.indivMode,
						exportAs: head.toJS().d.exportAs,
						uiJoyrideTutorialValue: head.toJS().d.uiJoyrideTutorialValue,
						firstTimeFile: head.toJS().d.firstTimeFile,
						firstTimeIndivCreate: head.toJS().d.firstTimeIndivCreate,
						firstTimeIndivEdit: head.toJS().d.firstTimeIndivEdit,
						firstTimeAcademyModal: head.toJS().d.firstTimeAcademyModal,
						firstTimeAcademyJoyride: head.toJS().d.firstTimeAcademyJoyride,
					});
				}
			})
			.onDelete(() => {
				if (this._isMounted) {
					this.setState(undefined);
				}
			});
	}

	componentWillUnmount() {
		this._isMounted = false;
		this.lifespan.release();
	}

	componentDidUpdate(prevProps, prevState) {
		const joyrideSteps = buildTutorialSteps(prevState, this.state);

		if (joyrideSteps.length) {
			setTimeout(() => {
				this.addSteps(joyrideSteps);
				this.refs.joyride.start(true);
			}, 400);
		}
	}

	/**
	 *	adds given steps to the state
	 *	@param {array} steps - an array containing joyride steps objects
	 */
	addSteps(steps) {
		const joyride = this.refs.joyride;

		if (!steps.length) {
			return false;
		}

		this.setState((currentState) => {
			if (currentState.joyrideSteps) {
				currentState.joyrideSteps = currentState.joyrideSteps.concat(
					joyride.parseSteps(steps),
				);
			}
			return currentState;
		});
	}

	addTooltip(data) {
		this.refs.joyride.addTooltip(data);
	}

	joyrideCallback(joyrideEvent) {
		if (joyrideEvent) {
			switch (joyrideEvent.action) {
			case 'next':
				handleNextStep(this, joyrideEvent);
				break;
			case 'close':
				handleClosed(this);
				this.refs.joyride.stop();
				break;
			case 'esc':
				handleClosed(this);
				this.refs.joyride.stop();
				break;
			default:
				break;
			}
		}
	}

	goToNextStep(step) {
		this.client.dispatchAction('/store-value', {uiOnboardstep: step});
	}

	exitOnboarding() {
		this.client.dispatchAction('/store-value', {uiOnboard: true});
	}

	render() {
		/* These are some guidelines about css:
		 * - All these guidelines have to be considered in the scope of SMACSS
		 * - All the first descendant of dashboard are unique layout container
		 * (i.e they have a unique id in there first element preferrably the
		 * lowercased name of the component)
		 * - Layout component should be named with a Capitalized name
		 * (i.e Sidebar, Menubar or Workboard)
		 * - All descendant of layout components are modules
		 * - the modules should have a class that is the name of the component
		 * in kebab-case (YoYoMa -> yo-yo-ma);
		 * - layout styles are prefixed with "l-"
		 * - state styles are prefixed with "is-"
		*/
		if (process.env.__SHOW_RENDER__) {
			console.log('[RENDER] dashboard');
		}

		const classes = classNames({
			indiv: this.state.indiv,
			normal: !this.state.indiv,
		});

		// timeouts : they are also used for tutorial triggering
		const panelTransitionTimeout = 200;

		// here modify ReactJoyride's labels

		const joyrideLocale = {
			back: 'Back',
			close: 'Close',
			last: 'OK',
			next: 'Next',
			skip: 'Skip',
		};
		const newVariant = this.state.openVariantModal && (
			<CreateVariantModal
				family={this.state.familySelectedVariantCreation}
				propName="openVariantModal"
			/>
		);
		const explainAcademy = this.state.firstTimeAcademyModal && (
			<CreateAcademyModal propName="openAcademyModal" />
		);
		const hostVariantModal = this.state.openHostVariantModal && (
			<HostVariantModal
				family={this.state.familySelectedVariantCreation}
				variant={this.state.collectionSelectedVariant}
				propName="openHostVariantModal"
			/>
		);
		const changeNameFamily = this.state.openChangeFamilyNameModal && (
			<ChangeNameFamily
				family={this.state.familySelectedVariantCreation}
				propName="openChangeFamilyNameModal"
			/>
		);
		const changeNameVariant = this.state.openChangeVariantNameModal && (
			<ChangeNameVariant
				family={this.state.familySelectedVariantCreation}
				variant={this.state.collectionSelectedVariant}
				propName="openChangeVariantNameModal"
			/>
		);
		const duplicateVariant = this.state.openDuplicateVariantModal && (
			<DuplicateVariant
				family={this.state.familySelectedVariantCreation}
				variant={this.state.collectionSelectedVariant}
				propName="openDuplicateVariantModal"
			/>
		);
		const goPro = this.state.openGoProModal && (
			<GoProModal propName="openGoProModal" />
		);

		const exportAs = this.state.exportAs && <ExportAs propName="exportAs" />;

		if (this.props.location.query.showModal) {
			this.client.dispatchAction('/store-value', {
				openGoProModal: true,
				goProModalBilling: this.props.location.query.showModal,
			});
		}

		return (
			<div id="dashboard" className={classes}>
				<Joyride
					ref="joyride"
					type="continuous"
					scrollToFirstStep={false}
					scrollToSteps={false}
					debug={false}
					locale={joyrideLocale}
					steps={this.state.joyrideSteps}
					callback={this.joyrideCallback}
				/>
				<Topbar />
				<Toolbar />
				<Workboard />
				<ReactCSSTransitionGroup
					component="span"
					transitionName="modal"
					transitionEnterTimeout={panelTransitionTimeout}
					transitionLeaveTimeout={panelTransitionTimeout}
				>
					{newVariant}
					{hostVariantModal}
					{changeNameFamily}
					{changeNameVariant}
					{duplicateVariant}
					{goPro}
					{exportAs}
					{explainAcademy}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

const getUserFontsAndFirstContactMadeQuery = gql`
	query getUserFonts {
		user {
			id
			firstContactMade
			library {
				id
			}
		}
	}
`;

const setFirstContactMadeMutation = gql`
	mutation setFirstContact($id: ID!) {
		updateUser(id: $id, firstContactMade: true) {
			id
		}
	}
`;

export default compose(
	graphql(getUserFontsAndFirstContactMadeQuery, {
		options: {
			fetchPolicy: 'cache-first',
		},
		props({data}) {
			if (data.loading) {
				return {loading: true};
			}
			return {
				library: data.user.library || [],
				firstContactMade: data.user.firstContactMade,
				userID: data.user.id,
			};
		},
	}),
	graphql(setFirstContactMadeMutation, {
		props: ({mutate, ownProps}) => ({
			setFirstContact: () =>
				mutate({
					variables: {
						id: ownProps.userID,
					},
				}),
		}),
	}),
)(withRouter(Dashboard));
