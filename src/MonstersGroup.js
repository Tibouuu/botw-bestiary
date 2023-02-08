import { useEffect, useState } from "react";
import axios from "axios";
import Monster from "./Monster";
import { Container } from "react-bootstrap"

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
    return(
        <Container>
            <h1 className="text-center mb-3"> BOTW: Bestiary of Hyrule</h1 >
            <input name="filtre" type="text" value={filter} onChange={handleFilterChange} />
            <ul >
                {filtered.map(x => <img key={x.id} src={x.img_url}></img>)}
            </ul >
        </Container>
    )
}