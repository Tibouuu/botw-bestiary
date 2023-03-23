import { useEffect, useState } from "react";
import axios from "axios";
import Monster from "./Monster";
import { Container } from "react-bootstrap"
import "./MonsterGroup.css";
import { Route, Link, Routes } from "react-router-dom";

export default function MonstersGroup() {
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState("");
    let filtered = results.filter(c => c.name.toUpperCase().includes(filter.toUpperCase()));

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
    return (
        <Container className="listmonster">
            <input name="filtre" type="text" value={filter} placeholder="Rechercher un monstre..." onChange={handleFilterChange} />
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
    )
}