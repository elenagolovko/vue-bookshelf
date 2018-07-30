import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
// import books from "./modules/books";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    bookList: [],
    newBook: {
      title: '',
      authors: '',
      pages: '',
      publisherName: '',
      yearOfPublication: '',
      releaseDate: '',
      isbn: '',
      image: ''
    },
  },

  getters: {
    books (state) {
      return state.bookList
    }
  },

  mutations: {
    fetch: (state, books) => {
      if (books === undefined) {
        return
      }
      books.forEach(function (book, index) {
        book.id = index
      });
      if (state.bookList.length === 0) {
        state.bookList = books;
      }
    },

    // Попытка привести это к одной функции, которая бы убрала повторения кода.
    // Однако данный вариант не работает, внешне в инпуте не меняется значение.
    // updateValue (state, value) {
    //   state.newBook['value'] = value;
    // },

    updateTitle (state, title) {
      state.newBook.title = title;
    },

    updateAuthors (state, authors) {
      state.newBook.authors = authors;
    },

    updatePages (state, pages) {
      state.newBook.pages = pages;
    },

    updatePublisherName (state, publisherName) {
      state.newBook.publisherName = publisherName;
    },

    updateYearOfPublication (state, yearOfPublication) {
      state.newBook.yearOfPublication = yearOfPublication;
    },

    updateReleaseDate (state, releaseDate) {
      state.newBook.releaseDate = releaseDate;
    },

    updateIsbn (state, isbn) {
      state.newBook.isbn = isbn;
    },

    setImage (state, image) {
      state.newBook.image = image;
    },

    REMOVE_BOOK: (state, index) => {
      state.bookList.splice(index, 1);
    },

    ADD_BOOK: (state) => {
      if (state.newBook.image === '') {
        state.newBook.image = './src/assets/not-available.jpg';
      }

      var book = Object.assign({}, state.newBook);
      state.bookList.push(book);
      for (var value in state.newBook) {
        state.newBook[value] = '';
      }
    },
  },
  actions: {
    fetchBooks: context => {
      return fetch("./books.json")
        .then(response => response.json())
        .then(data => {
          context.commit("fetch", data.bookList);       
        })
        .catch(err => {
          throw err;
        });
    },

    addBook: context => {
      context.commit('ADD_BOOK');
    },

    removeBook: (context, index) => {
      context.commit('REMOVE_BOOK', index);
    }
  }
});
