<template>
  <div class="hello">
    <h3>Recettes</h3>
    <div class="recetteGallery">
      <CardRecette/>
      
      
    </div>
  </div>  
</template>

<script>
import CardRecette from './CardRecette.vue'
export default {
  name: 'RecetteGallery',
  components:{
    CardRecette
  }
}
</script>


<style scoped>

</style>
