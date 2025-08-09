import React from 'react';

export default class PrototypoWordInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focus: false,
		};
	}

	componentDidUpdate(prevProps) {
		if (!this.state.focus && prevProps.value !== this.props.value) {
			this.refs.input.value = this.props.value;
		}
	}

	render() {
		const {onTypedText, value} = this.props;

		return (
			<input
				ref="input"
				className="prototypo-word-input"
				autoCorrect="off"
				spellCheck="false"
				type="text"
				onChange={(e) => {
					onTypedText(e.target.value);
				}}
				onFocus={() => {
					this.setState({focus: true});
				}}
				onBlur={() => {
					this.setState({focus: false});
				}}
				defaultValue={value}
			/>
		);
	}
}
