<template>
  <div class="recetteGallery">
    <h3>Recettes</h3>

    <div class="searchBar">
      <input type="text" v-model="searchParam" placeholder="rechercher une recette">
    </div>
    <div class="sortSelect"> 
      <select v-model="sortParam">
        <option value="alpha"> Ordre Alphabétique </option>
        <option value="time"> Le plus rapide </option>
        <option value="calories"> Le moins calorique </option>
      </select>
    </div>

    <div class="gallery">
      <div v-if="sortedRecipeData.length" class="length">
        <div v-for="(recipe, index) in filteredRecipeData.slice(0,20)" :key="index">
            <CardRecette :recipe="recipe"/>
        </div>
      </div>
      <div v-else>
        Chargement en cours
      </div>
    </div>
  </div>
</template>

<script>
import {getRecipeData} from '../services/galleryComponent.js'
import CardRecette from './CardRecette.vue'

export default {
  name: 'RecetteGallery',
  components:{
    CardRecette
  },
  data(){
    return{
      recipeData:[],
      sortParam : 'time',
      searchParam:'',
      filteredRecipeData:[],
      sortedRecipeData:[]
    }
  },
  created: function(){
    this.retrieveRecipeData()
  },
  methods:{
    async retrieveRecipeData(){
      const data = await getRecipeData();
      this.recipeData = data.hits;
      console.log(data.hits);
      this.sortRecipes();
      console.log('Data received:', data);
      console.log('Recipe data:',this.recipeData);

    },
    sortRecipes(){
      if(this.sortParam === 'alpha'){
      this.sortedRecipeData = this.recipeData.sort((a,b)=>a.recipe.label.localeCompare(b.recipe.label));
      }
      else if(this.sortParam === 'time'){
        this.sortedRecipeData = this.recipeData.sort((a,b)=>a.recipe.totalTime - b.recipe.totalTime);
      }
      else if(this.sortParam==='calories'){
        this.sortedRecipeData = this.recipeData.sort((a,b)=>a.recipe.calories - b.recipe.calories)
      }
      this.filteredRecipeData=this.filterRecipe();

    },
    filterRecipe(){
      if(this.searchParam.trim()===''){
        return this.recipeData;
      }
      else{
        const search = this.searchParam.trim().toLowerCase();
        const filteredData = this.recipeData.filter(recipe =>
        recipe.recipe.label.toLowerCase().includes(search)
        );
        return filteredData;
      }
      
    }
  },
  watch:{
    sortParam: function(){
      this.sortRecipes();
    },
    searchParam:function(){
      this.filteredRecipeData=this.filterRecipe();
    }
  }
}
</script>

<style scoped>

.length{
  display : flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recetteGallery {
  background-color: #f0efef;
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recetteGallery h3 {
  font-size: 40px;
  font-weight: bold;
  color: #656565;
  text-shadow: 1px 1px 2px #fff;
  margin-bottom: 30px;
}

.searchBar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.searchBar input[type="text"] {
  width: 70%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  font-size: 20px;
}

.sortSelect {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.sortSelect select {
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  font-size: 20px;
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}


</style>