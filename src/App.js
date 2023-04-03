import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import MonstersGroup from './MonstersGroup/MonstersGroup';
import Monster from './Monster/Monster';
import { useEffect, useState } from "react";
import Home from './Home';
import Carte from './Carte/Carte';
import closemenu from './Home';
import Add from './Add/Add';
import MenuTab from './MenuTab';

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
        <div>
          <Link to="/" onClick={closemenu}><img src="../img/title.png"></img></Link>
        </div>
        <div id="nomenu"><MenuTab /></div>
      </header>
      
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route exact={true} path="/Map" element={<Carte />}></Route>
        <Route exact={true} path="/Add" element={<Add />}></Route>
        <Route exact={true} path="/MonsterGroup/*" element={<MonstersGroup />}></Route>
        {results.map(x => <Route exact={true} path={"/Monster/" + x.id} element={<Monster key={x.id} {...x} />}></Route>)}
      </Routes>

    </>
  );
}

export default App;
