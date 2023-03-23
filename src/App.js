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

  function menu(){
    let tablette = document.getElementById('tablet')
    let menu = document.getElementById('InTablet')
    tablette.classList.add("ouvert")
    menu.classList.add("menu-open")
  }

  return (
    <>
      <header>
        <div>
        <Link to="/"><img src="../img/title.png"></img></Link>
        </div>
        <nav>          
          <Link to="/MonsterGroup/">Liste des monstres</Link>
          <a>Carte interactive</a>
          <a>Filtrer</a>
          <a>Ajouter</a>
        </nav>
      </header>
      <div className='tablet'>
        <img id="tablet" src="../img/Tablette.webp" onClick={menu}/>
        <div id='InTablet'>
          <a>Carte interactive</a>
          <a>Filtrer</a>
          <a>Ajouter</a>
          </div>
      </div>

      <Routes>
        <Route exact={true} path="/MonsterGroup/*" element={<MonstersGroup />}></Route>
        {results.map(x => <Route exact={true} path={"/Monster/" + x.id} element={<Monster key={x.id} {...x} />}></Route>)}
      </Routes>

    </>
  );
}

export default App;
