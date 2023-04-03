import { Link } from "react-router-dom"
import "./MenuTab.css";

function MenuTab(){

    function openmenu() {
        let tablette = document.getElementById('tablet-menu')
        let menu = document.getElementById('InTablet-menu')
        tablette.classList.add("ouvert")
        menu.classList.add("menu-open")
      }

    return(
        <div className='tablet-menu'>
        <img id="tablet-menu" src="../img/Tablette.webp" onClick={openmenu} />
        <div id='InTablet-menu'>
          <ul className='mode-menu'>
            <li><Link to="/MonsterGroup/"><p>Liste des monstres</p></Link></li>
            <li><Link to="/Map"><p>Carte interactive</p></Link></li>
            <li><Link to="/"><p>Filtrer</p></Link></li>
            <li><Link to="/Add"><p>Ajouter</p></Link></li>
          </ul>
        </div>
      </div>
    )
}

export default MenuTab;