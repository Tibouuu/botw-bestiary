import axios from "axios";
import "./Add.css";

function Add(){
    const handlePost = (e) =>{
        e.preventDefault();
        const { name, species, type, color, description, img_url, loots, biome } = e.target;
        const monster = {
            name: name.value,
            species: species.value,
            type: type.value,
            color: color.value,
            description: description.value,
            img_url: img_url.value,
            loots: loots.value,
            biome: biome.value
        }
        //change user to json 
        const jsonArticle = JSON.stringify(monster);
        console.log(jsonArticle)
        axios.post("http://127.0.0.1:8000/api/add", jsonArticle, { headers: { 'Content-Type': 'application/json' } } )
        .then(res => {
            console.log(res)
        })

        

    }

    return(
        <div className="postArticle">
            <form onSubmit={handlePost}>
                <h1>Ajoutez votre propre monstre !</h1>
               <div className="part1"> <div className="left"><label for="name">Nom</label>
                <input type="text" name="name" placeholder="Nom du monstre" required></input>
                <label for="species">Espèce</label>
                <input type="text" name="species" placeholder="Espèce" required></input>
                <label for="type">Type</label>
                <input type="text" name="type" placeholder="Type du monstre" required></input></div>
                <div className="right"><label for="color">Couleur</label>
                <input type="text" name="color" placeholder="Couleur principale" required></input>
                <label for="loots">Loots</label>
                <input type="text" name="loots" placeholder="Loots du monstre" required></input>
                <label for="biome">Habitat naturel</label>
                <input type="text" name="biome" placeholder="Habitat naturel" required></input></div>
                
                <div className="desc"><label for="description">Description</label><br/>
                <textarea type="text" name="description" placeholder="Description..." required></textarea></div></div>
                <label for="img_url">Image</label>
                <input type="text" name="img_url" placeholder="Lien de l'image" required></input>

                <div className="boutonValide"><input className="bouton" type="submit" value="Valider"></input></div>
            </form>
        </div>
    )
}

export default Add;