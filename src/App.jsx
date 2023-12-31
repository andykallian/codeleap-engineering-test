// import HomePage from './pages/HomePage';
// import MainScreen from './pages/MainScreen';
// import CreateUser from './pages/CreateUser';
// import NotFound from './pages/NotFound';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { UserProvider } from './context/UserContext';

// function App() {
//   return (
//     <BrowserRouter>
//       <UserProvider>
//         <Routes>
//           <Route path="/codeleap-engineering-test" element={<HomePage />} />
//           <Route path="/codeleap-engineering-test/main" element={<MainScreen />} />
//           <Route path="/codeleap-engineering-test/create-user" element={<CreateUser />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </UserProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import HomePage from './pages/HomePage';
import MainScreen from './pages/MainScreen';
import CreateUser from './pages/CreateUser';
import NotFound from './pages/NotFound';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/codeleap-engineering-test" element={<HomePage />} />
          <Route path="/codeleap-engineering-test/main" element={<MainScreen />} />
          <Route path="/codeleap-engineering-test/create-user" element={<CreateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;