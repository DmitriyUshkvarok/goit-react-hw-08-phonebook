import Header from 'components/Header/Header';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginForm = lazy(() => import('../../pages/LogInPage/LogInPage'));

const ContactPage = lazy(() => import('../../pages/ContactPage/ContactPage'));

function App() {
  return (
    <>
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
