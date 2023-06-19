import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainScreen from './pages/MainScreen';
import CreateUser from './pages/CreateUser';

import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/codeleap-engineering-test" element={<HomePage />} />
          <Route path="/codeleap-engineering-test/main" element={<MainScreen />} />
          <Route path="/codeleap-engineering-test/create-user" element={<CreateUser />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;