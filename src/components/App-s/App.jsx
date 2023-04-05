import Header from 'components/Header/Header';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from 'components/PrivateRoute';
import RestictedRoute from 'components/RestictedRoute';
import authSelector from 'redux/auth/auth-selector';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginForm = lazy(() => import('../../pages/LogInPage/LogInPage'));

const ContactPage = lazy(() => import('../../pages/ContactPage/ContactPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <>
      <ToastContainer />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="registration"
            element={
              <RestictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/log-in" component={<ContactPage />} />
            }
          ></Route>
          <Route
            path="log-in"
            element={
              <RestictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
