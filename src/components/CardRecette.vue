<template>
  <div class="cardRecipe">
<ul>
      <h4>{{recipe.recipe.label}}</h4>
      <p>{{recipe.recipe.totalTime}} min</p>
      <img :src="recipe.recipe.image" class="img" alt="Recipe Image">

</ul>
  </div>
</template>

<script>

	export default {
    name: 'CardRecette',
    props:{
      recipe : {
        type : Object,
        required : true
      }
    }
	}
</script>

<style scoped>
.cardRecipe {
  background-color: #F0F3F4;
 flex-basis: calc(33.33% - 20px);
max-width: 200px;
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
</style>


