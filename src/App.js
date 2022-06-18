import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MissionsList from './pages/MissionsList';
import Rockets from './pages/Rockets';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact="true" path="/" element={<Rockets />} />
        <Route exact="true" path="/missions" element={<MissionsList />} />
        <Route exact="true" path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
