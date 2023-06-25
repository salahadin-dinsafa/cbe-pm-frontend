import { Route, Routes } from 'react-router-dom';

import Home from './pages/homePage';
import DetailPage from './pages/detailPage';
import ProfilePage from './pages/profilePage';
import ServicePage from './pages/servicePage';
import { Error } from './pages/errorPage';
import LoginPage from './pages/loginPage';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:terminalID' element={<DetailPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
