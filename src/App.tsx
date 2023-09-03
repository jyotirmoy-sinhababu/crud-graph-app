import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './assest/store/Store';

import LandingPage from './pages/landingPage/LandingPage';
import ContactPage from './pages/contactPage/ContactPage';
import ChartsAndMapsPage from './pages/charts-maps-page/ChartsAndMapsPage';

function App() {
  return (
    <Provider store={store}>
      {' '}
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />}>
            <Route index element={<ContactPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='charts' element={<ChartsAndMapsPage />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
