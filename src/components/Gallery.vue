<template>
  <div class="recetteGallery">
    <h3>Recettes</h3>

    <div class="search-bar">
      <input type="text" v-model="searchParam" placeholder="rechercher une recette">
    </div>
    <div class="sort-select"> 
      <select v-model="sortParam">
        <option value="alpha"> Ordre Alphabétique </option>
        <option value="time"> Le plus rapide </option>
        <option value="calories"> Le moins calorique </option>
      </select>
    </div>

    <div class="gallery">
      <div v-if="sortedRecipeData.length" class="taille">
        <div class="test" v-for="(recipe, index) in filteredRecipeData.slice(0,20)" :key="index">
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

.taille {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.test{
  width: 20%;
}


</style>