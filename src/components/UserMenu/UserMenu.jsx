import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import authSelector from 'redux/auth/auth-selector';
import { UserMenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector.getName);
  const userEmail = useSelector(authSelector.getEmail);

  return (
    <UserMenuWrapper>
      <p>{userName}</p>
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
