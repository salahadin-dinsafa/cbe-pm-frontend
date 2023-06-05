import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import { Error } from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:terminalID' element={<DetailPage />} />
        <Route path='/profile/:userID' element={<ProfilePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
