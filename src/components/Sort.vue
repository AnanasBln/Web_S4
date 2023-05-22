<template>
  <div class="searchBar">
    <input type="text" :value="[searchParam]" @input="updateSearchParam" placeholder="rechercher une recette">
  </div>

  <div class="sortSelect"> 
    <select :value="sortParam" @change="updateSortParam">
      <option value="alpha"> Ordre Alphabétique </option>
      <option value="time"> Le plus rapide </option>
      <option value="calories"> Le moins calorique </option>
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
    updateSearchParam(event) {
      this.$emit('update:searchParam', event.target.value);
    },
    updateSortParam(event) {
      this.$emit('update:sortParam', event.target.value);
    }
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