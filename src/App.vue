<template>
  <div id="app" class="container row mr-auto ml-auto">
    <BookForm class="col-sm"/>
    <BookList classs="col"/>
  </div>
</template>

<script>
import BookForm from "./components/BookForm.vue";
import BookList from "./components/BookList.vue";

export default {
  name: "App",
  components: {
    BookForm,
    BookList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  flex-wrap: nowrap;
}
</style>