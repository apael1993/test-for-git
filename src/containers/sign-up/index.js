import React, { useState } from 'react';
import { DAYS, GENDERS, MONTHS, YEARS } from '../../helpers/constants';
import ValidationInput from "../../components/shared/validation-input";
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [email, changeEmail] = useState('');
  const [fullName, changeFullName] = useState('');
  const [phone, changePhone] = useState('');
  const [password, changePassword] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const [day, changeDay] = useState(1);
  const [month, changeMonth] = useState(0);
  const [year, changeYear] = useState(2021);
  const [gender, changeGender] = useState(1);
  const [validations, setValidations] = useState({});

  const isValidEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const registerNewUser = () => {
    const user = {
      email,
      fullName,
      phone,
      password,
      birthDate: new Date(year, month, day),
      gender
    };

    fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json UTF-8'
      }
    })
      .then(res => res.json())
      .then(user => {
      });
  };

  const signUp = () => {
    const newValidations = {};

    if (!isValidEmail()) {
      newValidations.email = 'Invalid Email';
    }
    if (password.length < 5) {
      newValidations.password = 'Invalid Password';
    }
    if (password !== confirmPassword) {
      newValidations.confirmPassword = 'Passwords does not match';
    }

    if (Object.keys(newValidations).length === 0) {
      registerNewUser();
    }
    setValidations(newValidations);
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <ValidationInput
        title={'Email'}
        value={email}
        onChangeHandler={changeEmail}
        validationMsg={validations.email}
      />

      Full Name:
      <input
        type={'text'}
        value={fullName}
        onChange={({ target: { value } }) => changeFullName(value)}
      /><br/>

      Phone:
      <input
        type={'text'}
        value={phone}
        onChange={({ target: { value } }) => changePhone(value)}
      /><br/>

      <ValidationInput
        title={'Password'}
        type={'password'}
        value={password}
        onChangeHandler={changePassword}
        validationMsg={validations.password}
      />

      <ValidationInput
        title={'Confirm Password'}
        type={'password'}
        value={confirmPassword}
        onChangeHandler={changeConfirmPassword}
        validationMsg={validations.confirmPassword}
      />

      Birth date:
      <select
        value={day}
        onChange={({ target: { value } }) => changeDay(+value)}
      >
        {DAYS.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <select
        value={month}
        onChange={({ target: { value } }) => changeMonth(+value)}
      >
        {MONTHS.map((month, i) => (
          <option key={month} value={i}>{month}</option>
        ))}
      </select>
      <select
        value={year}
        onChange={({ target: { value } }) => changeYear(+value)}
      >
        {YEARS.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <br/>

      {GENDERS.map(currentGender => (
        <label key={currentGender.id}>
          <input
            type='radio'
            value={currentGender.id}
            checked={gender === currentGender.id}
            onChange={() => changeGender(currentGender.id)}
          />
          {currentGender.label}
        </label>
      ))}
      <br/>

      <button onClick={signUp}>Sign Up</button>
      <Link to={'/signIn'}>
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default SignUp;