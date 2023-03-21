<template>
  <div class="CardRecette">
      <h2>Carbonara</h2>
      <p>30 min</p>
  </div>
</template>

<script>
	export default {
    name: 'CardRecette',
    props: ["NameRecette", "picture", "time", "ingredientnp"],
	}
</script>

<style scoped>

</style>