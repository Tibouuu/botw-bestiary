import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import MonstersGroup from './MonstersGroup';
import Monster from './Monster';
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  async function getMonsters() {
    try {
      const data = (await axios.get("http://localhost:8000/api/monsters")).data;
      setResults(data)
    } catch (err) {
      console.error("error CharacterGroup/getMonsters", err)
    }
  }
  useEffect(() => {
    (async () => {
      await getMonsters();
    })();
  }, []);

  return (
    <>
      <header>
        <img src="../title.png"></img>
        <h1>Bienvenue au royaume d'Hyrule.</h1>
      </header>
      <Routes>
        <Route exact={true} path="/MonsterGroup/*" element={<MonstersGroup />}></Route>
        {results.map(x => <Route exact={true} path={"/Monster/" + x.id} element={<Monster key={x.id} {...x} />}></Route>)}
      </Routes>
      <Link to="/MonsterGroup/">Liste des monstres</Link>
    </>
  );
}

export default App;
