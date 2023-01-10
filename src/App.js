import './App.css';
import Header from './Header.js';
import Roulette from './Roulette.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </div>
  );
}

export default App;
