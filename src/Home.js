import { Route, Link, Routes } from "react-router-dom";

function Home() {

  var test = document.getElementById("nomenu")
  test?.classList.add("no-menu")


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
    <div className='tablet'>
      <img id="tablet" src="../img/Tablette.webp" onClick={openmenu} />
      <div id='InTablet'>
        <p onClick={closemenu}>Fermer</p>
        <div className='mode'>
          <div><Link to="/MonsterGroup/" onClick={closemenu}><img src="../img/list-ul-regular-96.png" /><p>Liste des monstres</p></Link></div>
          <div><Link to="/Map" onClick={closemenu}><img src="../img/map-alt-regular-96.png" /><p>Carte interactive</p></Link></div>
          <div><Link to="/" onClick={closemenu}><img src="../img/purchase-tag-solid-96.png" /><p>Filtrer</p></Link></div>
          <div><Link to="/Add" onClick={closemenu}><img src="../img/add-to-queue-solid-96.png" /><p>Ajouter</p></Link></div>
        </div>
      </div>
    </div>
  )
}

export default Home;