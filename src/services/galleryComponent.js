
const getRecipeData = async function(){    
    const response = await fetch ("https://api.edamam.com/api/recipes/v2?app_id=c002f44c&app_key=e24b3ddd42e25d193054b9ec4927f087&type=any&dishType= main course") //requête HTTP GET qui renvoie une promesse
    if (response.status == 200){ //vérifie si la réponse réussie 
        return response.json() //extrait les données JSON
    }
    else {
        new Error(response.statusText)  
    }
}
export {getRecipeData}