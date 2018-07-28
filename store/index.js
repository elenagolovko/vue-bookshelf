import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
// import books from "./modules/books";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  // plugins: [createPersistedState()],
  state: {
    // bookList: JSON.parse(localStorage.getItem('books') || '[]'),
    bookList: [],
    newBook: {
      title: '',
      authors: '',
      pages: '',
      publisherName: '',
      yearOfPublication: '',
      releaseDate: '',
      isbn: '',
    },
  },

  getters: {
    books(state) {
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
      localStorage.setItem('books',  JSON.stringify(books));
      state.bookList = JSON.parse(localStorage.getItem('books') || '[]');
    },

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

    // save: (books) => {
    //   localStorage.setItem('books', JSON.stringify(books));  
    //   return true;    
    // },

    REMOVE_BOOK: (state, index) => {
      state.bookList.splice(index, 1);
      // localStorage.setItem('books', JSON.stringify(state.bookList));
    },

    ADD_BOOK: (state) => {
      var book = Object.assign({}, state.newBook);
      state.bookList.push(book);
      console.log(state.bookList);
      // localStorage.setItem('books', JSON.stringify(state.bookList));
      // console.log(state.bookList);
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
  // modules: {
  //   books
  //   // cart,
  // }
});
