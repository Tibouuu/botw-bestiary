import axios from "axios";

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
                <input type="text" name="name" placeholder="Nom du monstre" required></input>
                <input type="text" name="species" placeholder="Espèce" required></input>
                <input type="text" name="type" placeholder="Type du monstre" required></input>
                <input type="text" name="color" placeholder="Couleur principale" required></input>
                <textarea type="text" name="description" placeholder="Description..." required></textarea>
                <input type="text" name="img_url" placeholder="Lien de l'image" required></input>
                <input type="text" name="loots" placeholder="Loots du monstre" required></input>
                <input type="text" name="biome" placeholder="Habitat naturel" required></input>
                <input type="submit" value="Valider"></input>
            </form>
        </div>
    )
}

export default Add;