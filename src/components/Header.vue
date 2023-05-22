<template>
  <header class="app-header">
    <div class="header-background">
      <h1 class="app-title">The Fork</h1>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.app-header {
  position: relative;
  height: 300px;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/cooking_picture.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
}

.app-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
}
</style>