import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Missions from '.pages/Missions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
