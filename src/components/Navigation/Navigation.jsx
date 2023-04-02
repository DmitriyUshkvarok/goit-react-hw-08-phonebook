import { NavigateLink, StyleNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <NavigateLink>
        <StyleNavLink to="/home">Home</StyleNavLink>
        <StyleNavLink to="/registration">Registration</StyleNavLink>
        <StyleNavLink to="/log-in">Log In</StyleNavLink>
      </NavigateLink>
    </>
  );
};

export default Navigation;
