import React from "react";
import {Link} from "react-router-dom"
import { Button, Header } from 'semantic-ui-react'

import "./MenuBar.css";

//ne znam da li moze da se koristi custom css za ove komponente iz semantic ui
const MenuBar = () => (
  <div className="page">
    <Header as='h1' color="yellow">Memory Game Leaderboard</Header>

    <Button secondary as={Link} to="/leaderboard"> Highscores </Button>
  
  </div>
   
);

export default MenuBar;