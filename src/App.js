import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsList from './pages/MissionsList';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/missions" element={<MissionsList />} />
        <Route
          exact="true"
          path="/"
          element={<Rockets />}
        />
      </Routes>
    </div>
  );
}

export default App;
