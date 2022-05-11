import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<Rockets />}
        />
        <Route
          exact="true"
          path="/profile/"
          element={<MyProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
