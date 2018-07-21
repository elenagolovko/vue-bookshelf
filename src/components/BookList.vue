<template>
  <div class="booklist">
    <div class="col">
    <h3>Добавленные книги</h3>
    <button type="button" class="btn btn-primary">Sort by title</button>
    <br>
    <div class="row list">
        <ul v-for="(book, index) in books" :key="book.id" class="book-list col">
            <li class="img-upload book-element">
                <button @click="removeBook(index)" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img class="img-real" src="book.image" width="170" height="270" alt="Обложка книги">
            </li>
            <li class="book-element">
                <p>«{{book.title}}»</p> 
                <p>{{book.author}}</p> 
            </li>
        </ul>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  created: function() {
    this.$store.dispatch("fetchBooks");
  },
  // props: ["bookList"],
  computed: {
    books() {
      console.log(this.$store.state.bookList[0].title);
      return this.$store.state.bookList;
    }
  },
  methods: {
    removeBook: function(index) {
      this.$store.commit("removeBook", index);
    }
  }
};
</script>

<style scoped>
.book-element {
  list-style: none;
}

.list {
  margin-top: 40px;
}

.img-real {
  display: block;
  position: relative;
}

.close {
  position: absolute;
  left: 188px;
  top: -12px;
}

.sort-btn {
  margin-right: 10px;
}
</style>
