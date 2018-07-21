import Vue from "vue";
import Vuex from "vuex";

// import books from "./modules/books";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    bookList: [
      // {
      //   title: "Трудно быть богом",
      //   author: ["Аркадий Стругацкий", "Борис Стругацкий"],
      //   pages: 157,
      //   publisherName: "Издательство «Китеж»",
      //   yearOfPublication: 1991,
      //   releaseDate: 1964,
      //   ISBN: "5-87110-001-5",
      //   image: "./src/assets/upload-default-image2.jpg"
      // },
      // {
      //   title: "Конец Вечности",
      //   author: ["Айзек Азимов"],
      //   pages: 233,
      //   publisherName: "Издательство «Эксмо»",
      //   yearOfPublication: 2008,
      //   releaseDate: 1955,
      //   ISBN: "978-5-699-29966-9",
      //   image: "./src/assets/upload-default-image1.jpg"
      // }
    ]
  },
  getters: {},
  mutations: {
    removeBook: (state, index) => {
      state.bookList.splice(index, 1);
    },
    addBook: (state, data) => {
      state.bookList.push(data);
    }
  },
  actions: {
    fetchBooks: context => {
      return fetch("./books.json")
        .then(response => response.json())
        .then(data => {
          context.commit("addBook", data.bookList);
          // localStorage.setItem('books', JSON.stringify(this.books));
        })
        .catch(err => {
          throw err;
        });
    }
  }
  // modules: {
  //   books
  //   // cart,
  // }
});
