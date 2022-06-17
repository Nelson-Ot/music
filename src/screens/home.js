import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './trending';
import Feed from './feed';
import Library from './library';
import Player from './player';
import Favorites from './favorites';

export default function Home() {
  return (
     <Router>
         <Routes>
             <Route path="/" element={<Library />} />
             <Route path="/feed" element={<Feed />} />
             <Route path="/player" element={<Player />} />
             <Route path="/favorites" element={<Favorites />} />
             <Route path="/trending" element={<Trending />} />
         </Routes>
     </Router>
  );
}
