import './App.css';
import Header from './Header.js';
import Roulette from './Roulette.js';
import WatchList from './WatchList.js'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/roulette" element={<Roulette />} />
        {/* <Route path="/roulette/watchlist" element={<WatchList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
