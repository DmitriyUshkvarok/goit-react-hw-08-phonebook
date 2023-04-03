import Container from 'components/Container/Container';
import Navigations from 'components/AppBar/Navigations/Navigations';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AppBar/AuthNav/AuthNav';
import { StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';

const Header = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <Container>
          <Navigations />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
