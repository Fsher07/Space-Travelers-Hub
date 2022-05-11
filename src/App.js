import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionsList from './pages/MissionsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/missions" element={<MissionsList />} />
      </Routes>
    </div>
  );
}

export default App;
