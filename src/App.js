import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsList from './pages/MissionsList';
import Rockets from './pages/Rockets';
import MyProfileMission from './pages/MyProfile';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/missions" element={<MissionsList />} />
        <Route
          exact="true"
          path="/"
          element={<Rockets />}
        />
        <Route path="/myprofile" element={<MyProfileMission />} />
      </Routes>
    </div>
  );
}

export default App;
