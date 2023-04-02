import Header from 'components/Header/Header';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
