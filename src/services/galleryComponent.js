// export async function getRecipeData(){
//     const response = await fetch ("https://api.edamam.com/api/recipes/v2");
//     return await response.json;
// }

const getRecipeData = async function(){    
    const response = await fetch ("https://api.edamam.com/api/recipes/v2?app_id=c002f44c&app_key=e24b3ddd42e25d193054b9ec4927f087&type=any&mealType=Breakfast&to=5")
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }
}
export {getRecipeData}