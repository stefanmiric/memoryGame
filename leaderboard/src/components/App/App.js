import React from "react";


import "./App.css";
import EntryList from "../EntryList";
import MenuBar from "../MenuBar";


const App = () => (
    <div className="app">
        <MenuBar />
        <EntryList/>

    </div>
);

export default App;