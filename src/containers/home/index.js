import {createPerson, deletePerson, getPersons} from '../../core/controllers/home';
import NewPersonPopup from '../../components/new-person-popup';
import {personsSelector} from '../../store/selectors/home';
import PersonRow from '../../components/person-row';
import {Link, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const Home = () => {

	const history = useHistory();
	const [isPopupShown, changePopupShown] = useState(false);
	const persons = useSelector(personsSelector);

	useEffect(() => {
		getPersons();
	}, []);

	const onDeletePerson = (id) => {
		deletePerson(id);
	};

	const onCreatePerson = (person) => {
		createPerson(person);
	};

	const goToAbout = () => {
		history.push('/about');
	};

	if (!persons) {
		return <div>Loading</div>;
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Age</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{persons.map((person) => (
						<PersonRow
							onDelete={onDeletePerson}
							key={person.id}
							person={person}
						/>
					))}
				</tbody>
			</table>

			<button onClick={() => changePopupShown(true)}>
				Create
			</button>

			<button onClick={goToAbout}>
				Go To About
			</button>

			<Link to={'/contactUs'}>Go to Contact us</Link>

			{isPopupShown ?
				<NewPersonPopup
					onSave={onCreatePerson}
					closePopup={() => changePopupShown(false)}
				/> :
				null
			}
		</div>
	);
}

Home.propTypes = {
	persons: PropTypes.array
};

export default Home;