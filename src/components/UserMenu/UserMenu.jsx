import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import authSelector from 'redux/auth/auth-selector';
import {
  UserMenuWrapper,
  UserName,
  UserEmail,
  BtnLogAut,
} from './UserMenu.styled';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector.getName);
  const userEmail = useSelector(authSelector.getEmail);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      () => {
        dispatch(authOperations.logOut());
        navigate('/');
      },
      () => {}
    );
  };

  return (
    <UserMenuWrapper>
      <UserName>{userName}</UserName>
      <UserEmail>{userEmail}</UserEmail>
      <BtnLogAut onClick={handleLogOut} type="button">
        Logout
      </BtnLogAut>
    </UserMenuWrapper>
  );
};

export default UserMenu;
