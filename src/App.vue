<template>
  <div class="parentComponent">
    <AppHeader title="Mon Application"/>  
    <Gallery />
    <AppFooter/>
  </div>
</template>


<script>
import Gallery from './components/Gallery'
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

export default {
  name: 'ParentComponent',
  components: {
    Gallery,
    AppHeader,
    AppFooter
  }
}
</script>




<style scoped>
</style>
