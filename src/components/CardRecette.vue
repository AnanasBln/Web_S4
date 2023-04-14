<template>
  <div class="card-recipe">
    <h3>{{recipe.label}}</h3>
      <!-- <p>30 min</p> -->
      <p>{{time}}</p>
<ul>
    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
      {{ingredient.text}}

    </li>
</ul>

  </div>
</template>

<script>

	export default {
    name: 'CardRecette',
    props:{
      Title : String,
      picture : String,
      time : String,
      ingredients : Array,
      recipe : {
        type : Object,
        required : true
      }
    }
	}
</script>

<style scoped>
.card-recipe {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.3);
}
</style>



