import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import ContactComp from './components/contactComp/ContactComp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='contact' element={<ContactComp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
