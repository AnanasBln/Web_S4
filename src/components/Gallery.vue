<template>
  <div class="recetteGallery">
    <h3>Recettes</h3>
    <!-- attributs liés, modification du parent sera reflété dans l'enfant-->
    <!-- mise à jour des variables dans le composant parent en fonction des interactions-->
    <SortSelect
      :sort-param="sortParam"
      @update:sort-param="updateSortParam"
      :search-param="searchParam"
      @update:search-param="updateSearchParam"
      />
    <div class="gallery">
      <div v-if="sortedRecipeData.length" class="length">
        <div v-for="(recipe, index) in filteredRecipeData.slice(0,20)" :key="index">  <!-- affiche 20 recettes-->
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
import { getRecipeData } from '../services/galleryComponent.js';
import CardRecette from './CardRecette.vue';
import SortSelect from './Sort.vue';

export default {
  name: 'RecetteGallery',
  components: {
    CardRecette,
    SortSelect
  },
  data() {
   return {
      recipeData: [],
      sortParam: 'time',
      searchParam: '',
      filteredRecipeData: [],
      sortedRecipeData: []
    };
  },
  mounted() { //hook appelé quand le composant arrive dans le DOM
    this.retrieveRecipeData();
  },

  methods: {

    //recup les données des recettes ou renvoie erreur
    async retrieveRecipeData() {
      const data = await getRecipeData();
      if (data && data.hits) {
        this.recipeData = data.hits;
        console.log('Data received:', data);
        console.log('Recipe data:', this.recipeData);
        this.sortRecipes();
      } else {
        console.error('Failed to retrieve recipe data.');
      }
    },

    //trie données en fonction de sortParam
    sortRecipes() {
      this.sortedRecipeData = this.recipeData.slice();
      this.sortedRecipeData.sort((a, b) => {
        if (this.sortParam === 'alpha') {
          return a.recipe.label.localeCompare(b.recipe.label);
        } else if (this.sortParam === 'time') {
          return a.recipe.totalTime - b.recipe.totalTime;
        } else if (this.sortParam === 'calories') {
          return a.recipe.calories - b.recipe.calories;
        }
      });
    this.filterRecipes(); 
    },

  //filtre en fonction de searchParam
    filterRecipes() {
      if (this.searchParam.trim() === '') {
        this.filteredRecipeData = this.sortedRecipeData;
      } else {
        const search = this.searchParam.trim().toLowerCase();
        this.filteredRecipeData = this.sortedRecipeData.filter(recipe => {
          return recipe.recipe.label.toLowerCase().includes(search);
        });
      }
    },

    //mise à jour de sortParam
    updateSortParam(value) {
      this.sortParam = value;
    },

    //mise à jour de searchParam
    updateSearchParam(value) {
      this.searchParam = value;
    }
  },

  watch: { //surveille sortParam et searchParam pour appeler des fonctions
    sortParam() {
      this.sortRecipes();
    },
    searchParam() {
      this.filterRecipes();
    }
  }
};
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

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>