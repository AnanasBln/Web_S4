<template>
  <div class="searchBar">
    <!-- écoute de l'évènement input pour appeler handleSearchInputChange-->
    <input type="text" :value="searchParam" @input="handleSearchInputChange" placeholder="rechercher une recette">
  </div>

  <div class="sortSelect"> 
    <!-- écoute de l'évènement change pour appeler handleSortOptionChange-->
    <select :value="sortParam" @change="handleSortOptionChange">
      <option value="alpha">Ordre Alphabétique</option>
      <option value="time">Le plus rapide</option>
      <option value="calories">Le moins calorique</option>
    </select>
  </div>
</template>



<script>
export default {
  name: 'SortSelect',
  props: {
    sortParam: {
      type: String,
      required: true
    },
    searchParam: {
      type: String,
      required: true
    }
  },
  methods: {

    //appelé quand recherche change
    handleSearchInputChange(event) {
      const value = event.target.value;
      this.$emit('update:searchParam', value); //émet un évenement update:searchParam avec nouvelle valeur
      this.saveSearchParam(value); //enregistre valeur dans stockage local
    },

    //appelé quand option de tri change
    handleSortOptionChange(event) {
      const value = event.target.value;
      this.$emit('update:sortParam', value); //émet un évenement update:searchParam avec nouvelle valeur
      this.saveSortOption(value); //enregistre valeur dans stockage local
    },

    //enregistre valeurs dans le stockage local
    saveSearchParam(value) {
      localStorage.setItem('searchParam', value);
    },

    //enregistre valeurs dans le stockage local
    saveSortOption(value) {
      localStorage.setItem('sortOption', value);
    },

    //récup valeur enregistrée et émet un évènement
    loadSearchParam() {
      const searchParam = localStorage.getItem('searchParam');
      if (searchParam) {
        this.$emit('update:searchParam', searchParam);
      }
    },

    //récup valeur enregistrée et émet un évènement
    loadSortOption() {
      const sortOption = localStorage.getItem('sortOption');
      if (sortOption) {
        this.$emit('update:sortParam', sortOption);
      }
    }
  },
  //hook pour initialiser valeurs de paramètres de tri et de recherche à partir du stockage local
  mounted() {
    this.loadSearchParam();
    this.loadSortOption();
  }
};
</script>



<style scoped>
.searchBar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.searchBar input[type="text"] {
  width: 70%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  font-size: 20px;
}

.sortSelect {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.sortSelect select {
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  font-size: 20px;
}
</style>
