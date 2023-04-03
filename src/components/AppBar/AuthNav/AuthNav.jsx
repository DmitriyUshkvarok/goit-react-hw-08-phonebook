import { NavigateLink, StyleNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <NavigateLink>
        <StyleNavLink to="/registration">Registration</StyleNavLink>
        <StyleNavLink to="/log-in">Log In</StyleNavLink>
      </NavigateLink>
    </>
  );
};

export default AuthNav;
