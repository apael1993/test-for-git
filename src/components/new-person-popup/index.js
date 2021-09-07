import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewPersonPopup extends Component {

	static propTypes = {
		closePopup: PropTypes.func.isRequired,
		onSave: PropTypes.func.isRequired
	};

	state = {
		firstName: '',
		lastName: '',
		age: 0
	};

	onSaveHandler = () => {
		const {firstName, lastName, age} = this.state;
		const {onSave, closePopup} = this.props;

		onSave({
			firstName,
			lastName,
			age
		});
		closePopup();
	}

	onFirstNameChange = (e) => {
		this.setState({
			firstName: e.target.value
		});
	}

	onLastNameChange = (e) => {
		this.setState({
			lastName: e.target.value
		});
	}

	onAgeChange = (e) => {
		this.setState({
			age: +e.target.value
		});
	}

	render() {
		const {firstName, lastName, age} = this.state;
		const {closePopup} = this.props;

		return (
			<div>
				FirstName: <input type='text' value={firstName} onChange={this.onFirstNameChange}/><br/>
				LastName: <input type='text' value={lastName} onChange={this.onLastNameChange}/><br/>
				Age: <input type='number' value={age} onChange={this.onAgeChange}/><br/>

				<button onClick={closePopup}>
					Cancel
				</button>
				<button onClick={this.onSaveHandler}>
					Save
				</button>
			</div>
		);
	}
}

export default NewPersonPopup;
