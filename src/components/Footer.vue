<template>
 <footer class="footer">
    <div class="container">
      <div class="footer-info">
        <h4>Informations personnelles</h4>
        <ul>
          <li>Anastasiya Balan</li>
          <li>IMAC 2 - 2024</li>
          <li>Ce projet a été réalisé pendant le cours de Programmation Web de Antoine Libert</li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Liens sociaux</h4>
        <ul>
          <li><a href="https://www.instagram.com/votre_instagram">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/votre_profil">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/votre_chaine">YouTube</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.footer-info {
  width: 50%;
  text-decoration: none;
}

.footer-info ul{
  list-style: none;
}


.footer-info h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-links {
  width: 50%;
}

.footer-links h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 5px;
}

.footer-links ul li a {
  color: #333;
  text-decoration: none;
}
</style>