<template>
 <!-- card affichant le nom, la durée et l'image de la recette-->
  <div class="cardRecipe"> 
    <div class="card" @click="openPopup(recipe)"> <!-- évènement clic pour ouverture popup-->
      <ul>
        <h4>{{ recipe.recipe.label }}</h4>
        <p>{{ recipe.recipe.totalTime }} min</p>
        <img :src="recipe.recipe.image" class="img" alt="Recipe Image">
      </ul>
    </div>


    <!-- contenu de la fenêtre popup qui s'affiche quand showPopup est true-->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span> <!-- évènement clic pour fermeture popup-->
        <h2>{{ selectedRecipe.recipe.label }}</h2>
        <p>Temps de préparation : {{ selectedRecipe.recipe.totalTime }} min</p>
        <p>Nombre de portions : {{ selectedRecipe.recipe.yield }}</p>
        <h3>Ingrédients :</h3>
        <ul>
          <li v-for="ingredient in selectedRecipe.recipe.ingredients" :key="ingredient.text">
            {{ ingredient.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardRecette',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPopup: false,
      selectedRecipe: null
    };
  },
  methods: {
    //appelé quand on clique sur une card
    openPopup(recipe) {
      this.showPopup = true; //met à jour showPopup 
      this.selectedRecipe = recipe; //stock la recette selectionnée
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>




<style scoped>
.cardRecipe {
  background-color: #F0F3F4;
  flex-basis: calc(33.33% - 20px);
  max-width: 200px;
  height: 250px;
  border-radius: 16px;
  box-shadow: 
    -6px -6px 16px rgba(217, 217, 217, 0.8),
    6px 6px 16px rgba(164, 164, 164, 0.5);
  padding: 16px;
  margin: 3px;
  transition: box-shadow 0.3s ease-in-out;
}

.cardRecipe:hover {
  box-shadow: 
    -10px -10px 24px rgba(255, 255, 255, 0.8),
    10px 10px 24px rgba(209, 205, 199, 0.5);
}

.cardRecipe h4 {
  margin: 0 0 8px 0;
  font-weight: 600;
  font-size: 20px;
  color: #2C3E50;
}

.cardRecipe p {
  margin: 0;
  font-size: 16px;
  color: #34495E;
}

.cardRecipe img {
  width: 50%;
  height: auto;
  border-radius: 8px;
  margin-top: 16px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: black;
}

.popup-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  max-height: 400px;
  overflow-y: auto;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color : black;
}
</style>