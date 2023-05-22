<template>
  <div class="searchBar">
    <input type="text" :value="searchParam" @input="handleSearchInputChange" placeholder="rechercher une recette">
  </div>

  <div class="sortSelect"> 
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
    handleSearchInputChange(event) {
      const value = event.target.value;
      this.$emit('update:searchParam', value);
      this.saveSearchParam(value);
    },
    handleSortOptionChange(event) {
      const value = event.target.value;
      this.$emit('update:sortParam', value);
      this.saveSortOption(value);
    },
    saveSearchParam(value) {
      localStorage.setItem('searchParam', value);
    },
    saveSortOption(value) {
      localStorage.setItem('sortOption', value);
    },
    loadSearchParam() {
      const searchParam = localStorage.getItem('searchParam');
      if (searchParam) {
        this.$emit('update:searchParam', searchParam);
      }
    },
    loadSortOption() {
      const sortOption = localStorage.getItem('sortOption');
      if (sortOption) {
        this.$emit('update:sortParam', sortOption);
      }
    }
  },
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
