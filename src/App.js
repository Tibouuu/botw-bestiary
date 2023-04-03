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

  function openmenu() {
    let tablette = document.getElementById('tablet')
    let menu = document.getElementById('InTablet')
    tablette.classList.add("ouvert")
    menu.classList.add("menu-open")
  }

  function closemenu() {
    let tablette = document.getElementById('tablet')
    let menu = document.getElementById('InTablet')
    tablette.classList.remove("ouvert")
    menu.classList.remove('menu-open')
  }

  return (
    <>
      <header>
        <div>
          <Link to="/" onClick={closemenu}><img src="../img/title.png"></img></Link>
        </div>

      </header>
      <div className='tablet'>
        <img id="tablet" src="../img/Tablette.webp" onClick={openmenu} />
        <div id='InTablet'>
          <p onClick={closemenu}>Fermer</p>
          <div className='mode'>
            <div><Link to="/MonsterGroup/" onClick={closemenu}><img src="../img/list-ul-regular-96.png" /><p>Liste des monstres</p></Link></div>
            <div><Link to="/" onClick={closemenu}><img src="../img/map-alt-regular-96.png" /><p>Carte interactive</p></Link></div>
            <div><Link to="/" onClick={closemenu}><img src="../img/purchase-tag-solid-96.png" /><p>Filtrer</p></Link></div>
            <div><Link to="/" onClick={closemenu}><img src="../img/add-to-queue-solid-96.png" /><p>Ajouter</p></Link></div>
          </div>
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
