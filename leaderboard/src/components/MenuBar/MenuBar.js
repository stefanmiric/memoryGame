import React from "react";
import {Link} from "react-router-dom"
import { Button, Header } from 'semantic-ui-react'

import "./MenuBar.css";


const MenuBar = () => (
  <div className="page">
    <Header as='h1'>Memory Game leaderboard</Header>

    <Button primary as={Link} to="/leaderboard"> Highscores </Button>
  
  </div>
  
);

export default MenuBar;