import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NewPersonPopupHook = ({closePopup, onSave}) => {

	const [firstName, changeFirstName] = useState('');
	const [lastName, changeLastName] = useState('');
	const [age, changeAge] = useState(0);

	const onSaveHandler = () => {
		onSave({
			firstName,
			lastName,
			age
		});
		closePopup();
	}

	return (
		<div>
			FirstName: <input type='text' value={firstName} onChange={({target: {value}}) => changeFirstName(value)}/><br/>
			LastName: <input type='text' value={lastName} onChange={({target: {value}}) => changeLastName(value)}/><br/>
			Age: <input type='number' value={age} onChange={({target: {value}}) => changeAge(+value)}/><br/>

			<button onClick={closePopup}>
				Cancel
			</button>
			<button onClick={onSaveHandler}>
				Save
			</button>
		</div>
	);
}

NewPersonPopupHook.propTypes = {
	closePopup: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default NewPersonPopupHook;
