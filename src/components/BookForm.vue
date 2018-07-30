<template>
  <div class="bookform">
    <div class="book-info col"> 
    <h3>Добавить новую книгу</h3>
    <small id="formHelpBlock" class="form-text text-muted">
        <p class="danger">* - this value is required</p>
    </small>
    <form @submit.prevent="addBook">
      <label>Title* 
        <input v-validate="'required|min:3|max:30'" class="form-control" name="title" :value="title" @input="updateTitle" :class="{error: errors.has('title')}"/>
      </label>
      <span class="error-text" v-if="errors.has('title')">{{errors.first('title')}}</span>

      <label>Authors* 
        <input v-validate="'required|min:4'" class="form-control" name="authors" :value="authors" @input="updateAuthors" :class="{error: errors.has('authors')}"/>
      </label>
      <span class="error-text" v-if="errors.has('authors')">{{errors.first('authors')}}</span>

      <label>Pages* 
        <input v-validate="'required|numeric|min:0|max:10000'" class="form-control" name="pages" :value="pages" @input="updatePages" :class="{error: errors.has('pages')}"/>
      </label>
      <span class="error-text" v-if="errors.has('pages')">{{errors.first('pages')}}</span>

      <label>Publisher name 
        <input  v-validate="'max:30'" class="form-control" name="publisherName" :value="publisherName" @input="updatePublisherName" :class="{error: errors.has('publisherName')}"/>
      </label>
      <span class="error-text" v-if="errors.has('publisherName')">{{errors.first('publisherName')}}</span>

      <label>Year of publication 
        <input v-validate="'numeric|min:1800'" class="form-control" name="yearOfPublication" :value="yearOfPublication" @input="updateYearOfPublication" :class="{error: errors.has('yearOfPublication')}"/>
      </label>
      <span class="error-text" v-if="errors.has('yearOfPublication')">{{errors.first('yearOfPublication')}}</span>

      <label>Release date
        <input v-validate="'numeric|min:1800'" class="form-control" name="releaseDate" :value="releaseDate" @input="updateReleaseDate" :class="{error: errors.has('releaseDate')}"/>
      </label>
      <span class="error-text" v-if="errors.has('releaseDate')">{{errors.first('releaseDate')}}</span>

      <label>ISBN
        <input v-validate="'regex:/\d+-\d+/g'" class="form-control" name="isbn" :value="isbn" @input="updateIsbn" :class="{error: errors.has('isbn')}"/>
      </label>
      <span class="error-text" v-if="errors.has('isbn')">
        Valid ISBN should contain numbers and hyphens. Example: 2-266-11156-6
      </span>

      <label>Image</label>
      <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" @change="onFileChange"/>
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
import Vue from 'vue';
import { mapState } from 'vuex';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

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
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch("addBook");
        }
      });
    }, 

    onFileChange (evt) {
      evt.preventDefault();

      let image = evt.target.files[0];
      let reader = new FileReader();

      let setImage = () => {
        this.$store.commit('setImage', reader.result)
      };

      reader.addEventListener('load', setImage);
      reader.readAsDataURL(image);
    }
  }
};
</script>

<style scoped>
input {
  float: right;
}

.error-text {
  color: #9F3A38;
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
