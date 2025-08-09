import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {graphql, gql, compose} from 'react-apollo';
import InlineSVG from 'svg-inline-react';
import Lifespan from 'lifespan';
import LocalClient from '../../stores/local-client.stores';

import CreateVariantModal from '../familyVariant/create-variant-modal.components.jsx';
import ChangeNameVariant from '../familyVariant/change-name-variant.components.jsx';
import DuplicateVariant from '../familyVariant/duplicate-variant.components.jsx';
import LoadingOverlay from '../shared/loading-overlay.components.jsx';
import GoProModal from '../go-pro-modal.components.jsx';
import {LibrarySidebarLeft} from './library-sidebars.components';

class LibraryMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFilters: {},
			isBaseValueLoaded: false,
		};
		this.setActiveFilters = this.setActiveFilters.bind(this);
		this.export = this.export.bind(this);
		this.goToDashboard = this.goToDashboard.bind(this);
		this.open = this.open.bind(this);
		this.rename = this.rename.bind(this);
		this.duplicate = this.duplicate.bind(this);
		this.deleteVariant = this.deleteVariant.bind(this);
		this.closeRestrictedFeatureOverlay = this.closeRestrictedFeatureOverlay.bind(
			this,
		);
		this.openGoProModal = this.openGoProModal.bind(this);
	}
	async componentDidMount() {
		this._isMounted = true;
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		const prototypoStore = await this.client.fetch('/prototypoStore');

		if (this._isMounted) {
			this.setState({
				templateInfos: prototypoStore.head.toJS().templateList,
			});
		}

		this.client.getStore('/prototypoStore', this.lifespan).onUpdate((head) => {
			if (this._isMounted) {
				this.setState({
					openVariantModal: head.toJS().d.openVariantModal,
					openChangeVariantNameModal: head.toJS().d.openChangeVariantNameModal,
					openDuplicateVariantModal: head.toJS().d.openDuplicateVariantModal,
					familySelectedVariantCreation: head.toJS().d
						.familySelectedVariantCreation,
					collectionSelectedVariant: head.toJS().d.collectionSelectedVariant,
					templatesData: head.toJS().d.templatesData,
					search: head.toJS().d.librarySearchString,
					librarySelectedTags: head.toJS().d.librarySelectedTags,
					openRestrictedFeature: head.toJS().d.openRestrictedFeature,
					restrictedFeatureHovered: head.toJS().d.restrictedFeatureHovered,
					openGoProModal: head.toJS().d.openGoProModal,
				});
			}
		});
		
		// Check if we need to refetch library data (e.g., after font creation)
		const shouldRefetch = window.location.hash.includes('refetch=true') || 
		                     window.location.search.includes('refetch=true');
		                     
		if (this.props.refetch && shouldRefetch) {
			try {
				console.log('Library component: performing refetch due to URL parameter');
				await this.props.refetch();
				// Clean up the URL parameter
				if (window.location.hash.includes('refetch=true')) {
					window.location.hash = window.location.hash.replace(/[?&]refetch=true/, '');
				} else if (window.location.search.includes('refetch=true')) {
					const url = new URL(window.location);
					url.searchParams.delete('refetch');
					window.history.replaceState({}, '', url);
				}
				console.log('Library refetch completed');
			} catch (error) {
				console.log('Error refetching library data on mount:', error);
			}
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
		this.lifespan.release();
	}

	goToDashboard() {
		this.props.router.push('/dashboard');
	}

	open(variant, family) {
		this.client.dispatchAction('/select-variant', {
			selectedVariant: variant,
			family,
		});
		this.goToDashboard();
	}

	rename(variant, family) {
		this.client.dispatchAction('/store-value', {
			openChangeVariantNameModal: true,
			collectionSelectedVariant: variant,
			familySelectedVariantCreation: family,
		});
	}

	async deleteVariant(variant, family) {
		try {
			await this.props.deleteVariant(variant.id);

			// legacy call use to change the selected variant
			this.client.dispatchAction('/delete-variant', {
				variant,
				familyName: family.name,
			});
		}
		catch (err) {
			// TODO: Error handling
		}
	}

	duplicate(variant, family) {
		this.client.dispatchAction('/store-value', {
			openDuplicateVariantModal: true,
			collectionSelectedVariant: variant,
			familySelectedVariantCreation: family,
		});
	}

	export(
		merged,
		familyName,
		variantName = 'Regular',
		values,
		template,
		glyphs,
		designer,
		designerUrl,
		foundry,
		foundryUrl,
		weight,
		width,
		italic,
	) {
		this.client.dispatchAction('/export-otf-from-library', {
			merged,
			familyName,
			variantName,
			exportAs: false,
			values,
			template,
			glyphs,
			designer,
			designerUrl,
			foundry,
			foundryUrl,
			weight,
			width,
			italic,
		});
	}

	setActiveFilters(filters) {
		if (this._isMounted) {
			this.setState({activeFilters: filters});
		}
	}

	openGoProModal() {
		// TODO: Intercom tracking
		this.client.dispatchAction('/store-value', {
			openGoProModal: true,
		});
	}

	closeRestrictedFeatureOverlay() {
		this.client.dispatchAction('/store-value', {
			openRestrictedFeature: false,
			restrictedFeatureHovered: '',
		});
	}

	render() {
		let featureHovered;

		switch (this.state.restrictedFeatureHovered) {
		case 'export':
			featureHovered
					= 'To export as many projects as you want with unlimited rights';
			break;
		default:
			featureHovered = 'This feature is not available to you yet.';
		}

		const restrictedFeatureText = this.state.openRestrictedFeature ? (
			<div
				className="panel-demo-overlay"
				onClick={this.closeRestrictedFeatureOverlay}
			>
				<div className="panel-demo-overlay-text">
					<InlineSVG
						element="div"
						src={require('!svg-inline-loader!../../../images/academy/lock.svg')}
						onClick={this.openGoProModal}
					/>
					<p>{featureHovered}</p>

					<div
						className="panel-demo-overlay-text-gopro-cta"
						onClick={this.openGoProModal}
					>
						Upgrade to the full version
					</div>
				</div>
			</div>
		) : (
			false
		);

		return (
			<div className="library-main">
				<LibrarySidebarLeft
					location={this.props.location}
					subUsers={this.props.subUsers}
					userId={this.props.userId}
					families={this.props.families}
					routeParams={this.props.params}
					favourites={this.props.favourites}
					router={this.props.router}
				/>
				{this.props.loading && (
					<ReactCSSTransitionGroup
						transitionName="loading-overlay"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={300}
					>
						<LoadingOverlay />
					</ReactCSSTransitionGroup>
				)}
				{React.cloneElement(this.props.children, {
					activeFilters: this.state.activeFilters,
					families: this.props.families,
					subUsers: this.props.subUsers,
					presets: this.props.presets,
					setActiveFilters: this.setActiveFilters,
					fontInUses: this.props.fontInUses,
					open: this.open,
					export: this.export,
					rename: this.rename,
					duplicate: this.duplicate,
					deleteVariant: this.deleteVariant,
					updateTags: this.props.updateTags,
					favourites: this.props.favourites,
					addFavourite: this.props.addFavourite,
					hostedDomains: this.props.hostedDomains,
					createFavourite: this.props.createFavourite,
					deleteFavourite: this.props.deleteFavourite,
					abstractedTemplates: this.props.abstractedTemplates,
					user: {
						firstName: this.props.firstName,
						lastName: this.props.lastName,
						id: this.props.userId,
					},
					search: this.state.search,
					librarySelectedTags: this.state.librarySelectedTags,
				})}
				{restrictedFeatureText}
				{this.state.openGoProModal && <GoProModal propName="openGoProModal" />}
				{this.state.openVariantModal && (
					<CreateVariantModal
						family={this.state.familySelectedVariantCreation}
						propName="openVariantModal"
					/>
				)}
				{this.state.openChangeVariantNameModal && (
					<ChangeNameVariant
						family={this.state.familySelectedVariantCreation}
						variant={this.state.collectionSelectedVariant}
						propName="openChangeVariantNameModal"
					/>
				)}
				{this.state.openDuplicateVariantModal && (
					<DuplicateVariant
						family={this.state.familySelectedVariantCreation}
						variant={this.state.collectionSelectedVariant}
						propName="openDuplicateVariantModal"
					/>
				)}
			</div>
		);
	}
}

export const libraryQuery = gql`
	query {
		user {
			id
			library {
				id
				name
				template
				tags
				designer
				designerUrl
				foundry
				foundryUrl
				from {
					type
					preset {
						id
					}
					variant {
						id
						family {
							id
						}
					}
				}
				variants {
					id
					updatedAt
					name
					values
					width
					weight
					italic
					updatedAt
					abstractedFont {
						id
					}
				}
			}
		}
	}
`;

export const teamQuery = gql`
	query {
		user {
			id
			manager {
				id
				subUsers {
					id
					firstName
					lastName
					library {
						id
						name
						template
						tags
						designer
						designerUrl
						foundry
						foundryUrl
						variants {
							id
							updatedAt
							name
							values
							width
							weight
							italic
						}
					}
				}
			}
		}
	}
`;

export const libraryUserQuery = gql`
	query getLibraryUserInfos {
		user {
			id
			firstName
			lastName
			fontInUses {
				id
				client
				clientUrl
				designer
				designerUrl
				images
				fontUsed {
					id
					name
					variant {
						id
						family {
							id
						}
					}
					type
					template
					preset {
						id
					}
				}
			}
			favourites {
				id
				name
				updatedAt
				type
				preset {
					id
				}
				variant {
					id
					family {
						id
					}
				}
				template
			}
			hostedDomains {
				id
				domain
				updatedAt
				hostedVariants {
					id
					createdAt
					abstractedFont {
						id
						type
						name
						template
						preset {
							id
						}
						variant {
							id
							family {
								id
							}
						}
					}
					url
					version
				}
			}
		}
	}
`;

export const presetQuery = gql`
	query {
		allPresets(filter: {isPrototypoPreset: true}) {
			id
			ownerInitials
			abstractedFont {
				id
			}
			variant {
				name
				family {
					name
				}
			}
			template
			baseValues
		}
	}
`;

export const abstractedTemplatesQuery = gql`
	query {
		allAbstractedFonts(filter: {type: TEMPLATE}) {
			id
			template
		}
	}
`;

const updateTagsMutation = gql`
	mutation updateTags($id: ID!, $newTags: [String!]) {
		updateFamily(id: $id, tags: $newTags) {
			id
			tags
		}
	}
`;

const deleteVariantMutation = gql`
	mutation deleteVariant($id: ID!) {
		deleteVariant(id: $id) {
			id
		}
	}
`;

const deleteFavouriteMutation = gql`
	mutation deleteFavourite($userID: ID!, $abstractedFontID: ID!) {
		removeFromUserOnAbstractedFont(
			usersUserId: $userID
			favouritesAbstractedFontId: $abstractedFontID
		) {
			favouritesAbstractedFont {
				id
			}
		}
	}
`;

const createFavouriteMutation = gql`
	mutation createAbstractedFont(
		$usersIds: [ID!]!
		$type: FontType!
		$variantId: ID
		$template: String
		$presetId: ID
		$name: String!
	) {
		createAbstractedFont(
			usersIds: $usersIds
			type: $type
			variantId: $variantId
			template: $template
			presetId: $presetId
			name: $name
		) {
			id
			type
			name
			updatedAt
			preset {
				id
			}
			variant {
				id
				family {
					id
				}
			}
			template
		}
	}
`;

const addFavouriteMutation = gql`
	mutation addFavourite($userID: ID!, $abstractedFontID: ID!) {
		addToUserOnAbstractedFont(
			usersUserId: $userID
			favouritesAbstractedFontId: $abstractedFontID
		) {
			favouritesAbstractedFont {
				id
				type
				name
				updatedAt
				preset {
					id
				}
				variant {
					id
					family {
						id
					}
				}
				template
			}
		}
	}
`;

export default compose(
	graphql(libraryQuery, {
		options: {
			fetchPolicy: 'cache-and-network',
		},
		props: ({data}) => {
			if (data.loading) {
				return {loading: true};
			}

			if (data.user) {
				return {
					families: data.user.library,
					refetch: data.refetch,
				};
			}

			return {refetch: data.refetch};
		},
	}),
	graphql(teamQuery, {
		options: {
			fetchPolicy: 'cache-first',
		},
		props: ({data}) => {
			if (data.loading) {
				return {loading: true};
			}
			if (data.user) {
				return {
					subUsers: data.user.manager ? data.user.manager.subUsers : [],
					refetch: data.refetch,
				};
			}

			return {refetch: data.refetch};
		},
	}),
	graphql(libraryUserQuery, {
		options: {
			fetchPolicy: 'cache-first',
		},
		props: ({data}) => {
			if (data.loading) {
				return {
					loading: true,
					firstName: '',
					lastName: '',
					favourites: [],
				};
			}
			return (
				data.user && {
					firstName: data.user.firstName,
					lastName: data.user.lastName,
					userId: data.user.id,
					favourites: data.user.favourites,
					fontInUses: data.user.fontInUses,
					hostedDomains: data.user.hostedDomains,
				}
			);
		},
	}),
	graphql(deleteFavouriteMutation, {
		props: ({mutate, ownProps}) => ({
			deleteFavourite: abstractedFontID =>
				mutate({
					variables: {
						userID: ownProps.userId,
						abstractedFontID,
					},
				}),
		}),
		options: {
			update: (store, {data: {removeFromUserOnAbstractedFont}}) => {
				const data = store.readQuery({query: libraryUserQuery});

				data.user.favourites.splice(
					data.user.favourites.findIndex(
						f =>
							f.id
							=== removeFromUserOnAbstractedFont.favouritesAbstractedFont.id,
					),
					1,
				);
				store.writeQuery({
					query: libraryUserQuery,
					data,
				});
			},
		},
	}),
	graphql(createFavouriteMutation, {
		props: ({mutate, ownProps}) => ({
			createFavourite: (type, variantId, template, presetId, name) =>
				mutate({
					variables: {
						usersIds: [ownProps.userId],
						type,
						variantId,
						template,
						presetId,
						name,
					},
				}),
		}),
		options: {
			update: (store, {data: {createAbstractedFont}}) => {
				const dataUser = store.readQuery({query: libraryUserQuery});
				const dataLibrary = store.readQuery({query: libraryQuery});
				const dataPreset = store.readQuery({query: presetQuery});
				let variant;
				let preset;

				switch (createAbstractedFont.type) {
				case 'Preset':
					preset = dataPreset.allPresets.find(
						p => p.id === createAbstractedFont.preset.id,
					);
					preset.abstractedFont = {id: createAbstractedFont.id};
					break;
				case 'Variant':
					variant = dataLibrary.user.library
						.find(f => f.id === createAbstractedFont.variant.family.id)
						.variants.find(v => v.id === createAbstractedFont.variant.id);

					variant.abstractedFont = {id: createAbstractedFont.id};
					break;
				default:
					break;
				}

				dataUser.user.favourites.push(createAbstractedFont);

				store.writeQuery({
					query: libraryUserQuery,
					data: dataUser,
				});
				store.writeQuery({
					query: libraryQuery,
					data: dataLibrary,
				});
				store.writeQuery({
					query: presetQuery,
					data: dataPreset,
				});
			},
		},
	}),
	graphql(addFavouriteMutation, {
		props: ({mutate, ownProps}) => ({
			addFavourite: abstractedFontID =>
				mutate({
					variables: {
						userID: ownProps.userId,
						abstractedFontID,
					},
				}),
		}),
		options: {
			update: (store, {data: {addToUserOnAbstractedFont}}) => {
				const data = store.readQuery({query: libraryUserQuery});

				data.user.favourites.push(
					addToUserOnAbstractedFont.favouritesAbstractedFont,
				);
				store.writeQuery({
					query: libraryUserQuery,
					data,
				});
			},
		},
	}),
	graphql(updateTagsMutation, {
		props: ({mutate}) => ({
			updateTags: (id, newTags) =>
				mutate({
					variables: {
						id,
						newTags,
					},
				}),
		}),
		options: {
			update: (store, {data: {updateFamily}}) => {
				const data = store.readQuery({query: libraryQuery});
				const family = data.user.library.find(f => f.id === updateFamily.id);

				family.tags = [...updateFamily.tags];
				store.writeQuery({
					query: libraryQuery,
					data,
				});
			},
		},
	}),
	graphql(deleteVariantMutation, {
		props: ({mutate}) => ({
			deleteVariant: id =>
				mutate({
					variables: {id},
				}),
		}),
		options: {
			update: (store, {data: {deleteVariant}}) => {
				const data = store.readQuery({query: libraryQuery});

				data.user.library.forEach((family) => {
					// eslint-disable-next-line
					family.variants = family.variants.filter(
						variant => variant.id !== deleteVariant.id,
					);
				});

				store.writeQuery({
					query: libraryQuery,
					data,
				});
			},
		},
	}),
	graphql(presetQuery, {
		options: {
			fetchPolicy: 'cache-first',
		},
		props: ({data}) => {
			if (data.loading) {
				return {loading: true};
			}

			if (data.allPresets) {
				return {
					presets: data.allPresets,
				};
			}
		},
	}),
	graphql(abstractedTemplatesQuery, {
		options: {
			fetchPolicy: 'cache-first',
		},
		props: ({data}) => {
			if (data.loading) {
				return {loading: true};
			}

			if (data.allAbstractedFonts) {
				return {
					abstractedTemplates: data.allAbstractedFonts,
				};
			}
		},
	}),
)(LibraryMain);
