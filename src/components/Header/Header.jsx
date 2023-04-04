import Container from 'components/Container/Container';
import Navigations from 'components/AppBar/Navigations/Navigations';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AppBar/AuthNav/AuthNav';
import { StyledHeader, NavHeaderWrapper } from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import Switcher from 'components/Switcher/Switcher';

const Header = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <Container>
          <Switcher />
          <NavHeaderWrapper>
            <Navigations />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </NavHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
