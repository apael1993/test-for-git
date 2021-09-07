import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants';
import React from 'react';

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (location.pathname && (
    location.pathname !== '/signIn' && location.pathname !== '/signUp')
  ) ? (
      <ul>
        {ROUTES.filter(route => !route.isAuth).map(route => (
          <li key={route.id}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    ) : null;
};

export default Nav;