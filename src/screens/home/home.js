import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
// import { setClientToken } from "../../spotify";
// import Login from "../auth/login";
import Favorites from "../favorites/favorites";
import Feed from "../feed/feed";
import Library from "../library/library";
import Player from "../player/player";
import Trending from "../trending/trending";
import "./home.css";

export default function Home() {
  return (
     <Router>
    <div className='main-body'>
      <Sidebar />
         <Routes>
             <Route path="/" element={<Library />} />
             <Route path="/feed" element={<Feed />} />
             <Route path="/player" element={<Player />} />
             <Route path="/favorites" element={<Favorites />} />
             <Route path="/trending" element={<Trending />} />
         </Routes>
    </div>
     </Router>
  );
}
