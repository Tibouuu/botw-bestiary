import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import MonstersGroup from './MonstersGroup';
import Monster from './Monster';

function App() {
  return (
    <>
    <header>
      <img src="title.png"></img>
      <h1>Bienvenue au royaume d'Hyrule.</h1>
      </header>

    <MonstersGroup>
    </MonstersGroup>
    </>
  );
}

export default App;
