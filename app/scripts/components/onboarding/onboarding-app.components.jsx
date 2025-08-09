import React from 'react';
import {graphql, gql, compose} from 'react-apollo';
import Lifespan from 'lifespan';

import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import onboardingData from '../../data/onboarding.data';
import apolloClient from '../../services/graphcool.services';
import LocalClient from '../../stores/local-client.stores';

import Button from '../shared/new-button.components';
import Step from './step.components';
import FontUpdater from '../font-updater.components';
import AlternateChoice from './alternate-choice.components';

import {libraryQuery} from '../library/library-main.components';

const flatten = list =>
	list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

class OnboardingApp extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			values: undefined,
			parameters: [],
			selectedTemplate: props.location.state?.template || 'venus.ptf', // Default template
			selectedValues: props.location.state?.values || null,
			familyName: '',
			family: null, // Store created family for delete functionality
			createdFamily: false,
			creatingFamily: false,
			familyNameError: '',
			fontCreated: false,
			createdFamilyName: '',
		};
		this.renderAlternates = this.renderAlternates.bind(this);
		this.getNextStep = this.getNextStep.bind(this);
		this.getPreviousStep = this.getPreviousStep.bind(this);
		this.changeParam = this.changeParam.bind(this);
		this.createProject = this.createProject.bind(this);
		this.finishOnboarding = this.finishOnboarding.bind(this);
		this.goToLibrary = this.goToLibrary.bind(this);
		this.goToEditor = this.goToEditor.bind(this);
	}

	componentDidMount() {
		this.lifespan = new Lifespan();
		this.client = LocalClient.instance();

		this.client
			.getStore('/undoableStore', this.lifespan)
			.onUpdate((head) => {
				const headJS = head.toJS().d;

				this.setState({
					values: headJS.controlsValues,
				});
			})
			.onDelete(() => {
				this.setState({values: undefined});
			});

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				const headJS = head.toJS().d;

				this.setState({
					fontName: headJS.fontName,
					parameters: flatten(
						(headJS.fontParameters || []).reduce(
							(a, b) => [a, ...b.parameters],
							[],
						),
					),
					glyphs: headJS.glyphs,
					family: headJS.family,
				});

				// Set default template if none was provided
				if (!this.state.selectedTemplate && headJS.templateList && headJS.templateList.length > 0) {
					const defaultTemplate = headJS.templateList.find(t => t.templateName === 'venus.ptf') 
						|| headJS.templateList[0];
					this.setState({
						selectedTemplate: defaultTemplate.templateName,
					});
				}
			})
			.onDelete(() => {
				this.setState({parameters: []});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.fontName !== prevState.fontName) {
			this.getAlternateFonts();
		}
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	getNextStep() {
		if (this.state.step + 1 < onboardingData.steps.length) {
			this.setState({step: this.state.step + 1});
		}
	}

	finishOnboarding() {
		// Update the variant with final values from onboarding steps
		if (this.state.family && this.state.family.variants && this.state.family.variants.length > 0 && this.state.values) {
			console.log('Updating font with final values:', this.state.values);
			this.props.updateVariant(
				this.state.family.variants[0].id,
				this.state.values,
			);
		}
		
		// Show success screen after completing onboarding
		this.setState({
			fontCreated: true
		});
	}

	async goToLibrary() {
		// Prevent multiple rapid clicks
		if (this._navigating) {
			console.log('Navigation already in progress, ignoring click');
			return;
		}
		this._navigating = true;
		
		console.log('goToLibrary clicked, router available:', !!this.props.router);
		
		try {
			// Refetch library data to ensure new fonts are visible
			if (this.props.refetch) {
				try {
					console.log('Refetching library data...');
					const refetchResult = await Promise.race([
						this.props.refetch(),
						new Promise((_, reject) => setTimeout(() => reject(new Error('Refetch timeout')), 3000))
					]);
					console.log('Library data refetched successfully:', refetchResult?.data?.user?.library?.length, 'fonts');
				} catch (error) {
					console.log('Error refetching library data:', error);
					// Continue navigation even if refetch fails
				}
			}
			
			// Add refetch parameter to trigger library refresh
			console.log('Navigating to library...');
			if (this.props.router) {
				this.props.router.push('/library/home?refetch=true');
				console.log('✅ Navigation to library initiated via router');
			} else {
				// Fallback for offline mode or missing router
				console.log('Router not available, using window.location');
				window.location.hash = '#/library/home?refetch=true';
				console.log('✅ Navigation to library initiated via window.location');
			}
		} catch (error) {
			console.error('Navigation error:', error);
			// Ultimate fallback
			window.location.hash = '#/library/home';
		} finally {
			// Reset navigation flag after a short delay
			setTimeout(() => {
				this._navigating = false;
			}, 1000);
		}
	}

	goToEditor() {
		// Prevent multiple rapid clicks
		if (this._navigating) {
			console.log('Navigation already in progress, ignoring click');
			return;
		}
		this._navigating = true;
		
		console.log('goToEditor clicked, router available:', !!this.props.router);
		
		try {
			if (this.props.router) {
				this.props.router.push('/dashboard');
			} else {
				// Fallback for offline mode or missing router
				console.log('Router not available, using window.location');
				window.location.hash = '#/dashboard';
			}
		} catch (error) {
			console.error('Navigation error:', error);
			// Ultimate fallback
			window.location.hash = '#/dashboard';
		} finally {
			// Reset navigation flag after a short delay
			setTimeout(() => {
				this._navigating = false;
			}, 1000);
		}
	}

	getPreviousStep() {
		if (this.state.step - 1 >= 0) {
			this.setState({step: this.state.step - 1});
		}
	}

	async createProject() {
		this.setState({familyNameError: ''});
		const name = this.state.familyName;

		if (!String(name).trim()) {
			this.setState({familyNameError: 'You must choose a name for your family'});
			return;
		}

		try {
			console.log('Creating font with template:', this.state.selectedTemplate, 'and values:', this.state.selectedValues);
			console.log('User ID available for font creation:', this.props.userId);
			
			if (!this.props.userId) {
				throw new Error('You must be logged in to create fonts');
			}
			const abstractedFontMeta = this.props.location.state?.abstractedFontMeta;
			let abstracted;

			if (abstractedFontMeta) {
				const abstractedWhere = {
					where: {},
				};

				if (abstractedFontMeta.type === 'VARIANT') {
					abstractedWhere.where = {variant: {id: abstractedFontMeta.variantId}};
				}
				if (abstractedFontMeta.type === 'PRESET') {
					abstractedWhere.where = {preset: {id: abstractedFontMeta.presetId}};
				}
				const abstractedquery = await apolloClient.query({
					query: getAbstractedFontQuery,
					variables: abstractedWhere,
				});

				abstracted = abstractedquery.data.allAbstractedFonts[0];

				if (!abstracted) {
					const abstractedFontCreated = await this.props.createAbstractedFont(
						abstractedFontMeta.type,
						abstractedFontMeta.variantId,
						undefined,
						abstractedFontMeta.presetId,
						abstractedFontMeta.name,
					);

					abstracted = abstractedFontCreated.data.createAbstractedFont;
				}
			}
			this.setState({creatingFamily: true});
			const {data: {createFamily: newFont}} = await this.props.createFamily(
				name,
				this.state.selectedTemplate,
				this.state.selectedValues || {},
				abstracted ? abstracted.id : undefined,
			);

			this.setState({creatingFamily: false});
			this.setState({createFamily: true});
			
			console.log('Font creation response:', newFont);
			console.log('Font should now be in user library. Font ID:', newFont?.id);
			
			// Ensure newFont has required properties before dispatching actions
			if (newFont && newFont.template && newFont.variants && newFont.variants.length > 0) {
				this.client.dispatchAction('/family-created', newFont);

				this.client.dispatchAction('/change-font', {
					templateToLoad: newFont.template,
					variant: newFont.variants[0],
					family: newFont,
				});
				
				this.setState({
					createdFamily: newFont,
					family: newFont, // Set family state for delete functionality
					createdFamilyName: newFont.name
				});
			} else {
				console.error('Invalid newFont object received from createFamily:', newFont);
				// Fallback to using the selected template
				const fallbackFont = {
					id: 'fallback-font',
					name: name,
					template: this.state.selectedTemplate,
					variants: [{
						id: 'fallback-variant',
						name: 'Regular',
						values: this.state.selectedValues || {}
					}]
				};
				
				this.client.dispatchAction('/family-created', fallbackFont);
				this.client.dispatchAction('/change-font', {
					templateToLoad: fallbackFont.template,
					variant: fallbackFont.variants[0],
					family: fallbackFont,
				});
				
				this.setState({
					family: fallbackFont, // Set family state for delete functionality
					createdFamilyName: name
				});
			}
			this.getNextStep();
		}
		catch (err) {
			console.log(err);
			this.setState({creatingFamily: false});
			this.setState({familyNameError: err.message});
		}
	}

	getAlternateFonts() {
		if (!this.state.glyphs) {
			this.setState({alternatesDedup: {}});
			return;
		}
		
		const alternatesUnicodes = Object.keys(this.state.glyphs).filter(
			key =>
				this.state.glyphs[key].length > 1
				&& !this.state.glyphs[key][0].base
				&& key !== 'undefined',
		);
		const alternatesDedup = alternatesUnicodes.reduce((acc, key) => {
			acc[key] = this.state.glyphs[key];
			return acc;
		}, {});

		this.setState({alternatesDedup});
	}

	changeParam(params) {
		this.client.dispatchAction('/change-param', params);
	}

	renderAlternates(stepData) {
		const {alternatesDedup, values} = this.state;

		// Debug logging
		console.log('renderAlternates called with:', { alternatesDedup, values, hasValues: !!values, hasAltList: !!(values && values.altList) });

		// Early return if state is not ready
		if (!alternatesDedup || !values || Object.entries(alternatesDedup).length === 0) {
			if (alternatesDedup && Object.entries(alternatesDedup).length === 0) {
				this.setState({step: this.state.step + 1});
			}
			return null;
		}
		const glyphsWithAlternate = Object.entries(alternatesDedup).map(
			([unicode, alternates], index) => {
				const selectedAlternateName
					= (values?.altList || {})[unicode] || alternates[0].name;

				return alternates.map((alternate, alternateIndex) => ({
					name:
						alternateIndex === 0
							? 'alternateBase'
							: `alternateFont${index}-${alternateIndex}`,
					subset: stepData.letters[unicode],
					unicode,
					isSelected: selectedAlternateName === alternate.name,
				}));
			},
		);

		return (
			<Step className="step-alternates" {...stepData}>
				{glyphsWithAlternate.map((alternates) => {
					const {unicode} = alternates[0];

					return (
						<AlternateChoice
							alternates={alternates}
							key={unicode}
							text={stepData.letters[unicode]}
							unicode={unicode}
							onSelect={(alternateIndex) => {
								const alternate = alternatesDedup?.[unicode]?.[alternateIndex];
								if (alternate) {
									this.client.dispatchAction('/set-alternate', {
										unicode,
										glyphName: alternate.name,
										relatedGlyphs: alternate.relatedGlyphs,
									});
								}
							}}
						/>
					);
				})}
			</Step>
		);
	}

	defineRender(stepData) {
		switch (stepData.type) {
		case 'sliders':
			return (
				<Step
					className="step-sliders-wrapper"
					{...stepData}
					parameters={this.state.parameters}
					fontName={this.state.fontName}
					values={this.state.values}
					onChangeParam={this.changeParam}
				/>
			);
		case 'alternates':
			return this.renderAlternates(stepData);
		case 'serifs':
			return (
				<Step
					className="step-serifs-wrapper"
					{...stepData}
					parameters={this.state.parameters}
					fontName={this.state.fontName}
					values={this.state.values}
					onChangeParam={this.changeParam}
				/>
			);
		case 'finish':
			return (
				<Step
					className="step-finish"
					{...stepData}
					fontName={this.state.fontName}
				/>
			);
		case 'start':
			return <Step className="step-start" {...stepData} />;
		default:
			return null;
		}
	}

	async deleteFamily(family) {
		try {
			if (!family) {
				console.log('No family to delete, navigating to library');
				this.props.router.push('/library/create');
				return;
			}
			
			console.log('Deleting family:', family.name || family.id);
			await this.props.deleteFamily(family);
			// legacy call use to change the selected family
			this.client.dispatchAction('/delete-family', {
				family,
			});
			await this.props.refetch();
			this.props.router.push('/library/create');
		}
		catch (err) {
			console.error('Family deletion failed:', err);
			// Still navigate to library even if deletion fails
			this.props.router.push('/library/create');
		}
	}

	render() {
		const {
			step,
			alternatesDedup,
			values,
			selectedTemplate,
			fontName,
			createFamily,
		} = this.state;
		const stepData = onboardingData.steps[step];

		// Failsafe - redirect to library if no template is available (shouldn't happen with default)
		if (!selectedTemplate || selectedTemplate === '') {
			// Auto-redirect after a short delay to give user feedback
			setTimeout(() => {
				this.props.router.push('/library/create');
			}, 2000);

			return (
				<div className="onboarding-app">
					<div className="onboarding-wrapper">
						<div className="onboarding-content">
							<h3>Redirecting to library...</h3>
							<p className="description">
								Please select a template from the library to start onboarding.
								Redirecting automatically in 2 seconds...
							</p>
							<Button
								onClick={() => this.props.router.push('/library/create')}
							>
								Go to Library Now
							</Button>
						</div>
					</div>
				</div>
			);
		}

		// Just getting the fonts we need to generate
		let fontsToGenerate = [];

		if (stepData.type === 'alternates') {
			fontsToGenerate = Object.keys(alternatesDedup || {}).reduce(
				(arr, glyphUnicode, index) => {
					const alternatesToGenerate = (alternatesDedup || {})[glyphUnicode]
						.map((alternate, alternateIndex) => {
							// we won't generate a specific variant for the default glyph
							if (alternateIndex === 0) {
								return null;
							}

							return {
								name: `alternateFont${index}-${alternateIndex}`,
								subset: stepData.letters[glyphUnicode],
								values: {
									...(this.state.values || {}),
									altList: {
										[glyphUnicode]: alternate.name,
									},
								},
								unicode: alternate.unicode,
								isSelected: alternateIndex === 0,
							};
						})
						.filter(a => a); // filtering null values

					return arr.concat(alternatesToGenerate);
				},
				[],
			);
		}

		const {letters} = onboardingData.steps.find(e => e.type === 'alternates');
		const allStrings = Object.values(letters).join('');

		const updaters = fontsToGenerate.map(font => (
			<FontUpdater
				key={font.name}
				name={font.name}
				subset={font.subset}
				values={font.values}
				template={this.state.selectedTemplate}
				glyph="0"
			/>
		));

		if (values && selectedTemplate && fontName && createFamily) {
			updaters.push(
				<FontUpdater
					name="alternateBase"
					subset={allStrings}
					values={{
						...values,
						altList: {},
					}}
					template={selectedTemplate}
					glyph="0"
				/>,
			);

			updaters.push(
				<FontUpdater
					name={fontName}
					subset="Hamburgefonstiv"
					values={{
						...values,
						altList: {},
					}}
					template={selectedTemplate}
					glyph="0"
				/>,
			);
		}

		// Show success message after font creation
		if (this.state.fontCreated) {
			return (
				<div className="onboarding-app">
					<div className="onboarding-wrapper">
						<div className="onboarding-content">
							<div className="step step-success">
								<h2>🎉 Congratulations!</h2>
								<p className="description">
									Your font "{this.state.createdFamilyName}" has been created and customized! It's now saved to your library.
								</p>
								<div className="success-actions">
									<Button
										className="library-button"
										onClick={(e) => {
											e.preventDefault();
											this.goToLibrary();
										}}
									>
										View in Library
									</Button>
									<Button
										className="editor-button"
										onClick={(e) => {
											e.preventDefault();
											this.goToEditor();
										}}
									>
										Continue Editing
									</Button>
								</div>
								<p className="hint">
									💡 Tip: You can always find your fonts in the Library section of the main navigation.
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="onboarding-app">
				<div className="onboarding-wrapper">
					<Button
						outline
						neutral
						size="small"
						className="backToApp"
						onClick={() => {
							// Only try to delete if there's a family created
							if (this.state.family) {
								this.deleteFamily(this.state.family);
							} else {
								// If no family created, just navigate to library
								try {
									if (this.props.router) {
										this.props.router.push('/library/create');
									} else {
										window.location.hash = '#/library/create';
									}
								} catch (error) {
									window.location.hash = '#/library/create';
								}
							}
						}}
					>
						Back to library
					</Button>
					{this.props.families
						&& this.props.families.length > 3
						&& stepData.type !== 'start' && (
						<Button
							outline
							neutral
							size="small"
							className="skip"
							onClick={() => this.props.router.push('/dashboard')}
						>
								Skip
						</Button>
					)}
					<div className="onboarding-content">
						{this.defineRender(stepData)}
						{stepData.type === 'start' && (
							<div className="step step-start-second">
								<p className="description">
									But first, let's give your project a name.
								</p>
								<input
									type="text"
									name="familyName"
									id="familyName-Input"
									value={this.state.familyName}
									onChange={(e) => {
										this.setState({
											familyName: e.target.value,
										});
									}}
								/>
								{this.state.familyNameError !== '' && (
									<p className="description error">
										{this.state.familyNameError}
									</p>
								)}
								<Button
									className="create"
									disabled={
										this.state.familyName === '' || this.state.creatingFamily
									}
									loading={this.state.creatingFamily}
									onClick={() => {
										if (!this.state.creatingFamily) {
											this.createProject();
										}
									}}
								>
									Start designing
								</Button>
								{/* <h3>Need inspiration?</h3>
								<p className="description">
									A good name for a typeface should reflect its design and its
									purpose. <br />
									You can use{' '}
									<a
										href="http://namecheck.fontdata.com/about/"
										target="_blank"
										rel="noopener noreferrer"
									>
										http://namecheck.fontdata.com/about/
									</a>{' '}
									to check the availibility of the chosen name.
								</p> */}
							</div>
						)}
						{stepData.type !== 'start' && (
							<Button
								className="nextStep"
								loading={this.state.parameters === []}
								onClick={() => {
									if (this.state.parameters !== []) {
										this.state.step < onboardingData.steps.length - 1
											? this.getNextStep()
											: this.finishOnboarding();
									}
								}}
							>
								{(() => {
									switch (this.state.step) {
									case 0:
										return 'Start';
										break;
									case onboardingData.steps.length - 1:
										return 'Finish';
										break;
									default:
										return 'Next';
										finish;
									}
								})()}
							</Button>
						)}
						{updaters}
						{stepData.type !== 'start' && (
							<div className="bubbles">
								{onboardingData.steps.map((step, index) => (
									<Tooltip
										key={`step-tooltip-${index}`}
										title={step.name}
										position="bottom"
										trigger="mouseenter"
										delay="500"
										arrow="true"
									>
										<div
											className={`bubble ${
												index === this.state.step ? 'active' : ''
											} ${index < this.state.step ? 'previous' : ''}`}
											onClick={() => {
												index <= this.state.step
													? this.setState({
														step: index,
													})
													: false;
											}}
										/>
									</Tooltip>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const updateVariantMutation = gql`
	mutation updateVariant($id: ID!, $values: Json) {
		updateVariant(id: $id, values: $values) {
			id
			values
			family {
				id
			}
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

const deleteFamilyMutation = gql`
	mutation deleteFamily($id: ID!) {
		deleteFamily(id: $id) {
			id
		}
	}
`;

const getUserIdQuery = gql`
	query getUserId {
		user {
			id
		}
	}
`;

const createAbstractedFontMutation = gql`
	mutation createAbstractedFont(
		$type: FontType!
		$variantId: ID
		$template: String
		$presetId: ID
		$name: String!
	) {
		createAbstractedFont(
			type: $type
			variantId: $variantId
			template: $template
			presetId: $presetId
			name: $name
		) {
			id
		}
	}
`;

const createFamilyMutation = gql`
	mutation createFamily(
		$name: String!
		$template: String!
		$values: Json
		$ownerId: ID!
		$abstractedFontId: ID
	) {
		createFamily(
			name: $name
			template: $template
			ownerId: $ownerId
			designer: ""
			designerUrl: ""
			foundry: "Prototypo"
			foundryUrl: "https://prototypo.io/"
			fromId: $abstractedFontId
			variants: [
				{
					name: "Regular"
					values: $values
					weight: 400
					width: "normal"
					italic: false
				}
			]
		) {
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
`;

const getAbstractedFontQuery = gql`
	query getAbstractedFont($where: AbstractedFontFilter) {
		allAbstractedFonts(filter: $where) {
			id
		}
	}
`;

export default compose(
	graphql(libraryQuery, {
		options: {
			fetchPolicy: 'network-only',
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
	graphql(createAbstractedFontMutation, {
		props: ({mutate}) => ({
			createAbstractedFont: (type, variantId, template, presetId, name) =>
				mutate({
					variables: {
						type,
						variantId,
						template,
						presetId,
						name,
					},
				}),
		}),
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
	graphql(deleteFamilyMutation, {
		props: ({mutate, ownProps}) => ({
			deleteFamily: (family) => {
				if (!family) {
					return Promise.reject(new Error('No family to delete'));
				}

				// don't worry, mutations are batched, so we're only sending one or two requests
				// in the future, cascade operations should be available on graphcool
				const variants = (family.variants || []).map(variant =>
					ownProps.deleteVariant(variant.id),
				);

				return Promise.all([...variants, mutate({variables: {id: family.id}})]);
			},
		}),
		options: {
			update: (store, {data: {deleteFamily}}) => {
				const data = store.readQuery({query: libraryQuery});

				data.user.library = data.user.library.filter(
					font => font.id !== deleteFamily.id,
				);

				store.writeQuery({
					query: libraryQuery,
					data,
				});
			},
		},
	}),
	graphql(getUserIdQuery, {
		props: ({data}) => {
			if (data.loading) {
				return {loading: true};
			}

			return {userId: data.user.id};
		},
	}),
	graphql(createFamilyMutation, {
		props: ({mutate, ownProps}) => ({
			createFamily: (name, template, values, abstractedId) =>
				mutate({
					variables: {
						ownerId: ownProps.userId,
						name,
						template,
						values,
						abstractedFontId: abstractedId,
					},
				}),
		}),
		options: {
			update: (store, {data: {createFamily}}) => {
				try {
					console.log('Updating Apollo cache with new family:', createFamily);
					const data = store.readQuery({query: libraryQuery});
					console.log('Current library data:', data?.user?.library?.length || 0, 'families');
					
					// Check if family already exists to avoid duplicates
					const existingFamily = data.user.library.find(family => family.id === createFamily.id);
					if (!existingFamily) {
						data.user.library.push(createFamily);
						store.writeQuery({
							query: libraryQuery,
							data,
						});
						console.log('Family added to cache. New library size:', data.user.library.length);
					} else {
						console.log('Family already exists in cache');
					}
				} catch (error) {
					console.error('Error updating library cache:', error);
					console.log('Cache update failed, this may cause library sync issues');
					// Don't reset the store as it's too disruptive
					// store.resetStore();
				}
			},
		},
	}),
	graphql(updateVariantMutation, {
		props: ({mutate}) => ({
			updateVariant: (id, values) =>
				mutate({
					variables: {
						id,
						values,
					},
				}),
		}),
		options: {
			update: (store, {data: {updateVariant}}) => {
				const data = store.readQuery({query: libraryQuery});
				const variant = data.user.library.find(
					f => f.id === updateVariant.family.id,
				).variants[0];

				variant.values = updateVariant.values;
				store.writeQuery({
					query: libraryQuery,
					data,
				});
			},
		},
	}),
)(OnboardingApp);
