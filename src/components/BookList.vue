<template>
  <div class="booklist">
    <div class="col">
    <h3>Добавленные книги</h3>
    <button type="button" class="btn btn-primary">Sort by title</button>
    <br>
    <div class="row list">
        <ul class="book-list col">
            <li class="img-upload book-element">
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
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
  data() {
    return {
      book: {
        title: "testBook",
        author: "testAuthor"
      }
    };
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
