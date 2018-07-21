<template>
  <div class="bookform">
    <div class="book-info col"> 
    <h3>Добавить новую книгу</h3>
    <small id="formHelpBlock" class="form-text text-muted">
        <p class="danger">* - this value is required</p>
    </small>
    <form @submit.prevent="addBook(form)">
      <label>Title* 
        <input class="form-control" name="title" v-model="form.title"/>
      </label>
      <label>Authors* 
        <input class="form-control" name="authors" v-model="form.author"/>
      </label>
      <label>Pages* 
        <input class="form-control" name="pages" v-model="form.pages"/>
      </label>
      <label>Publisher name 
        <input class="form-control" name="publisherName" v-model="form.publisherName"/>
      </label>
      <label>Year of publication 
        <input class="form-control" name="yearOfPublication" v-model="form.yearOfPublication"/>
      </label>
      <label>Release date
        <input class="form-control" name="releaseDate" v-model="form.releaseDate"/>
      </label>
      <label>ISBN
        <input class="form-control" name="isbn" v-model="form.isbn"/>
      </label>
      <button class="btn submit-btn" type="submit">
      Добавить
      </button>
    </form>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        author: "",
        pages: "",
        publisherName: "",
        yearOfPublication: "",
        releaseDate: "",
        isbn: ""
      }
    };
  },
  computed: {
    books() {
      return this.$store.state.bookList;
    }
  },
  methods: {
    addBook: function(data) {
      this.$store.commit("addBook", data);
    }
  }
};
</script>

<style scoped>
input {
  float: right;
}

.form-group {
  padding-bottom: 20px;
}

.book-info {
  width: 200px;
}

.add-author-btn {
  position: absolute;
  left: 265px;
  background-color: #fff;
}

label {
  display: flow-root;
}

.form-control-feedback {
  position: absolute;
  display: block;
  width: 213px;
  left: 285px;
  top: 18px;
}
.error {
  box-shadow: 0px 0px 8px red;
}

.has-success {
  box-shadow: 0px 0px 8px rgb(4, 167, 4);
}
.danger {
  color: red;
}

.form-group-sm {
  position: relative;
}

.submit-btn {
  margin-top: 10px;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);

  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
