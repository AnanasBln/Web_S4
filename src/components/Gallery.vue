<template>
  <div class="recetteGallery">
    <h3>Recettes</h3>
    <div class="gallery">
      <div v-if="recipeData.length">
        <div v-for="(recipe, index) in recipeData.slice(0,5)" :key="index">

            <h4>{{recipe.recipe.label}}</h4>
            <p>{{recipe.recipe.totalTime}} min</p>
            <img :src="recipe.recipe.image" alt="Recipe Image">
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
      recipeData:[]
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
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .gallery {
    flex-direction: column;
  }


}
</style>