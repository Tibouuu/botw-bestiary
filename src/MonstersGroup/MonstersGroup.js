import { useEffect, useState } from "react";
import axios from "axios";
import Monster from "../Monster/Monster";
import { Container } from "react-bootstrap"
import "./MonsterGroup.css";
import { Route, Link, Routes } from "react-router-dom";

export default function MonstersGroup() {
    var test = document.getElementById("nomenu")
    test?.classList.remove("no-menu")
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("name");

    let filtered = results.filter(c => c.name.toUpperCase().includes(filter.toUpperCase()));

    if(selectedFilter=="name"){
        filtered = results.filter(c => c.name.toUpperCase().includes(filter.toUpperCase()));
    }else if(selectedFilter=="color"){
         filtered = results.filter(c => c.color.toUpperCase().includes(filter.toUpperCase()));
    }else if(selectedFilter=="species"){
        filtered = results.filter(c => c.species.toUpperCase().includes(filter.toUpperCase()));
    }else if(selectedFilter=="loots"){
         filtered = results.filter(c => c.loots.toUpperCase().includes(filter.toUpperCase()));
    }else if(selectedFilter=="biome"){
        filtered = results.filter(c => c.biome.toUpperCase().includes(filter.toUpperCase()));
    }



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

    function handleFilterChange(e) {
        setFilter(e.target.value)
      
    }

    function handleSelectedFilterChange(e){
        setSelectedFilter(e.target.value)
    }

    return (
        <>
        <Container className="listmonster">
            <input name="filtre" type="text" value={filter} placeholder={"Rechercher un monstre par " + selectedFilter}  onChange={handleFilterChange} />
            <form  className="radios">
                <div className="bouton"><input type="radio" id="name" name="filtreSelect" value="name" checked={selectedFilter==="name"} onChange={handleSelectedFilterChange} />
                <label for="name">Nom</label></div>
                <div className="bouton"><input type="radio" id="color" name="filtreSelect" value="color" checked={selectedFilter==="color"} onChange={handleSelectedFilterChange} />
                <label for="color">Couleur</label></div>
                <div className="bouton"><input type="radio" id="species" name="filtreSelect" value="species" checked={selectedFilter==="species"} onChange={handleSelectedFilterChange} />
                <label for="species">Espèce</label></div>
                <div className="bouton"><input type="radio" id="loots" name="filtreSelect" value="loots" checked={selectedFilter==="loots"} onChange={handleSelectedFilterChange}/>
                <label for="loots">Loot</label></div>
                <div className="bouton"><input type="radio" id="biome" name="filtreSelect" value="biome" checked={selectedFilter==="biome"} onChange={handleSelectedFilterChange} />
                <label for="biome">Biome</label></div><br/>
            </form>
            <ul>
                {filtered.map(x => <>
                    <Routes>
                        <Route exact={true} path={"/Monster/" + x.id} element={<Monster key={x.id} {...x}/>} />
                    </Routes>
                    <Link to={"/Monster/" + x.id}><img key={x.name} {...x} src={x.img_url}></img></Link>
                </>
                )}
            </ul>
        </Container>
        </>
    )
}