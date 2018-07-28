<template>
  <div class="bookform">
    <div class="book-info col"> 
    <h3>Добавить новую книгу</h3>
    <small id="formHelpBlock" class="form-text text-muted">
        <p class="danger">* - this value is required</p>
    </small>
    <form @submit.prevent="addBook">
      <label>Title* 
        <input class="form-control" name="title" :value="title" @input="updateTitle"/>
      </label>
      <label>Authors* 
        <input class="form-control" name="authors" :value="authors" @input="updateAuthors"/>
      </label>
      <label>Pages* 
        <input class="form-control" name="pages" :value="pages" @input="updatePages"/>
      </label>
      <label>Publisher name 
        <input class="form-control" name="publisherName" :value="publisherName" @input="updatePublisherName"/>
      </label>
      <label>Year of publication 
        <input class="form-control" name="yearOfPublication" :value="yearOfPublication" @input="updateYearOfPublication"/>
      </label>
      <label>Release date
        <input class="form-control" name="releaseDate" :value="releaseDate" @input="updateReleaseDate"/>
      </label>
      <label>ISBN
        <input class="form-control" name="isbn" :value="isbn" @input="updateIsbn"/>
      </label>
      <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile"/>
          <label class="custom-file-label" for="customFile">Choose an image</label> 
      </div>
      <button class="btn submit-btn" type="submit">
      Добавить
      </button>
    </form>
</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      title: state => state.newBook.title,
      authors: state => state.newBook.authors,
      pages: state => state.newBook.pages,
      publisherName: state => state.newBook.publisherName,
      yearOfPublication: state => state.newBook.yearOfPublication,
      releaseDate: state => state.newBook.releaseDate,
      isbn: state => state.newBook.isbn,
    }),
  },

  methods: {
    updateTitle (evt) {
      this.$store.commit('updateTitle', evt.target.value)
    },

    updateAuthors (evt) {
      this.$store.commit('updateAuthors', evt.target.value)
    },

    updatePages (evt) {
      this.$store.commit('updatePages', evt.target.value)
    },

    updatePublisherName (evt) {
      this.$store.commit('updatePublisherName', evt.target.value)
    },

    updateYearOfPublication (evt) {
      this.$store.commit('updateYearOfPublication', evt.target.value)
    },

    updateReleaseDate (evt) {
      this.$store.commit('updateReleaseDate', evt.target.value)
    },

    updateIsbn (evt) {
      this.$store.commit('updateIsbn', evt.target.value)
    },

    addBook () {
      this.$store.dispatch("addBook");
    }, 

    // onFileChange: function (evt) {
    //   evt.preventDefault();

    //   let image = evt.target.files[0];
    //   let reader = new FileReader();

    //   let setImage = () => {
    //     if (!this.book.image) {
    //       this.$set(this.book, 'image', reader.result);
    //     }
    //   };
    //   reader.addEventListener('load', setImage);
    //   reader.readAsDataURL(image);
    // }
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
  width: 300px;
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
