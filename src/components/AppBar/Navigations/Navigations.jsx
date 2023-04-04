import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import { MainNavWrapper, MainLink } from './Navigations.styled';

const Navigations = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <MainNavWrapper>
      <MainLink to="/">Home</MainLink>
      {isLoggedIn && <MainLink to="/contacts">Contacts</MainLink>}
    </MainNavWrapper>
  );
};

export default Navigations;
