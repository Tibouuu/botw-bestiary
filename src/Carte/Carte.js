import './Carte.css';
import axios from 'axios';
import Zone from '../Zone/Zone';
import { Link } from 'react-router-dom';
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
    }, [nom]);

    var test = document.getElementById("nomenu")
    test?.classList.remove("no-menu")
    
    function handleregion(e){
        setNom(e.target.textContent)
    }
    console.log(results)
    return (
        <div className='map'>
            <p onClick={handleregion} id="zone1">Plaine d'Hyrule</p>
            <p onClick={handleregion} id="zone2">Château d'Hyrule</p>
            <p onClick={handleregion} id="zone3">Ouest de Necluda</p>
            <p onClick={handleregion} id="zone4">Désert Gerudo</p>
            <p onClick={handleregion} id="zone5">Hauteurs Gerudo</p>
            <p onClick={handleregion} id="zone6">Est de Necluda</p>
            <p onClick={handleregion} id="zone7">Profondeurs d'Akkala</p>
            <p onClick={handleregion} id="zone8">Ravin d'Ordinn</p>
            <p onClick={handleregion} id="zone9">Grande Source de Lanelle</p>
            <p onClick={handleregion} id="zone11">Chaîne d'Hébra</p>
            <p onClick={handleregion} id="zone12">Collines d'Hyrule</p>
            <p onClick={handleregion} id="zone13">Confins de Tabanta</p>
            <p onClick={handleregion} id="zone14">Grande forêt d'Hyrule</p>
            <p onClick={handleregion} id="zone15">L'ensemble d'Hyrule</p>
            <p onClick={handleregion} id="zone16">Montagne de la Mort</p>
            <p onClick={handleregion} id="zone17">Vah'Medoh</p>
            <p onClick={handleregion} id="zone18">Vah'Rudania</p>
            <p onClick={handleregion} id="zone19">Vah'Ruta</p>
            <p onClick={handleregion} id="zone20">Vah'Naboris</p>
            <p onClick={handleregion} id="zone21">Inconnu</p>
            <div className="zones" id={nom}><h1>La faune de la zone : {nom}</h1>
            <p>Cette région d'Hyrule abrite {results.length} créatures, observez les espèces qui y vivent et apprenez-en davantage sur elles !</p>
            <div className='monsterzone'>{results.map(x => <div><Link to={"/Monster/" + x.id}><img src={x.img_url}/><p>{x.name}</p></Link></div>)}</div>
            </div>
            <img src="../img/map.webp"></img>
        </div>

    )
}

export default Carte;