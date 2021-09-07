import ContactUs from '../../containers/contact-us';
import SignIn from '../../containers/sign-in';
import Todos from '../../containers/todos';
import About from '../../containers/about';
import Home from '../../containers/home';
import React from 'react';
import SignUp from '../../containers/sign-up';

export const ROUTES = [
  {
    id: 1,
    path: '/signIn',
    name: 'SignIn',
    isAuth: true,
    component: <SignIn/>
  },
  {
    id: 2,
    path: '/signUp',
    name: 'SignUp',
    isAuth: true,
    component: <SignUp/>
  },
  {
    id: 3,
    path: '/home',
    name: 'Home',
    isAuth: false,
    component: <Home/>
  },
  {
    id: 4,
    path: '/todos',
    name: 'Todos',
    isAuth: false,
    component: <Todos/>
  },
  {
    id: 5,
    path: '/about',
    name: 'About',
    isAuth: false,
    component: <About/>
  },
  {
    id: 6,
    path: '/contactUs',
    name: 'Contact US',
    isAuth: false,
    component: <ContactUs/>
  }
];

export const DAYS = [];
for (let i = 1; i <= 31; i++) {
  DAYS.push(i);
}

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const YEARS = [];
for (let i = 1920; i <= 2021; i++) {
  YEARS.push(i);
}

export const GENDERS = [
  { id: 1, label: 'Male' },
  { id: 2, label: 'Female' },
  { id: 3, label: 'Other' }
]