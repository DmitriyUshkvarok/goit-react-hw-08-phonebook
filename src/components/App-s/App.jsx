import Header from 'components/Header/Header';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginForm = lazy(() => import('../../pages/LogInPage/LogInPage'));

const ContactPage = lazy(() => import('../../pages/ContactPage/ContactPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="registration" element={<RegistrationPage />}></Route>
          <Route path="contacts" element={<ContactPage />}></Route>
          <Route path="log-in" element={<LoginForm />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
