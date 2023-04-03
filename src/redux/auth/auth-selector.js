const getIsLoggedIn = state => state.auth.isLoggedIn;

const getName = state => state.auth.user.name;

const getEmail = state => state.auth.user.email;

const authSelector = {
  getIsLoggedIn,
  getName,
  getEmail,
};
export default authSelector;
