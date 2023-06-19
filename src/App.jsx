//import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainScreen from './pages/MainScreen';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/codeleap-engineering-test" element={<HomePage />} />
        <Route path="/codeleap-engineering-test/main" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;