import { NavLink } from 'react-router-dom';
import { NavigateLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <NavigateLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/log-in">Log In</NavLink>
      </NavigateLink>
    </>
  );
};

export default Navigation;
