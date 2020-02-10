import React from "react";
import {Link} from "react-router-dom"
import "./MenuBar.css";


const MenuBar = () => (
  <div className="page">
  <p>
    MemoryGame leaderboard:
  </p>
  <Link to="/leaderboard" className="link">Highscores</Link>
</div>
  
);

export default MenuBar;