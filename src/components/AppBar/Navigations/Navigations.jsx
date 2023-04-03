import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';

const Navigations = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </>
  );
};

export default Navigations;
