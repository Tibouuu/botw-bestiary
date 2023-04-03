import './Carte.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Carte() {
    const [results, setResults] = useState([])
    const [nom, setNom] = useState("")
        var region = document.getElementById(nom)
        region?.classList.add("open-zone")
        async function getZone() {
            try {
                const data = (await axios.get("http://localhost:8000/api/monsters/"+nom)).data;
                setResults(data)
            } catch (err) {
                console.error("error Carte/getZone", err)
            }
        }

    useEffect(() => {
        (async () => {
            await getZone();
        })();
    }, []);

    var test = document.getElementById("nomenu")
    test?.classList.remove("no-menu")
    
    function handleregion(e){
        setNom(e.target.textContent)
    }

    return (
        <div className='map'>
            <p onClick={handleregion}>Plaine d'Hyrule</p><br />
            <p onClick={handleregion}>Château d'Hyrule</p><br />
            <div className="zones" id="Plaine d'Hyrule">coucou, {results.map(x => x.name)} {console.log(results.length)}</div>
            <img src="../img/map.webp"></img>
        </div>

    )
}

export default Carte;