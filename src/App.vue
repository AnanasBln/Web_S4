<template>
<div class="parentComponent">
  <img class="logo" alt="Vue logo" src="./assets/logo_fork.png">
    <Gallery/>
</div>
</template>


<script>
import Gallery from './components/Gallery'

export default {
  name: 'ParentComponent',
  components: {
    Gallery

  }
}
</script>




<style scoped>
.logo{
  width:200px;
}

</style>
