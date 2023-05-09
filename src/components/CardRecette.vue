<template>
  <div class="card-recipe">
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
.card-recipe {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.3);

}
.img{
  width : 40%;
}

</style>



