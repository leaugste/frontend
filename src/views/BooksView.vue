<script>
import BooksApi from "@/api/books.js";
const booksApi = new BooksApi();
export default {
  data() {
    return {
      book: {},
      books: [],
    };
  },
  async created() {
    this.books = await booksApi.searchAllTheBooks();
  },
  methods: {
    async save() {
      if (this.book.id) {
        await booksApi.updateBook(this.book);
      } else {
        await booksApi.addBook(this.book);
      }
      this.books = await booksApi.searchAllTheBooks();
      this.book = {};
    },
    async delete(book) {
      await books.deleteBook(book.id);
      this.books = await booksApi.searchAllTheBooks();
    },
    edit(book) {
      Object.assign(this.book, book);
    },
  },
};
</script>

<template>
  <main class="main">
    <section class="home">
      <div class="home__shape-small"></div>
      <div class="home__shape-big1"></div>
      <div class="home__shape-big2"></div>
      <img src="@/assets/img/shape-bg.png" alt="" class="home__shape-bg">

      <div class="home__container container">
        <div class="home__info">
          <h1 class="home__title">
            <span>Books</span>
          </h1>
          <p class="home__description">
            Insert the info below.
          </p>
          <div class="input__info">
            <input type="text" class="home__input" placeholder="Insert book's name" v-model="book.book" @keyup.enter="save">
          </div>
          <div class="input__info">
            <input type="number" class="home__input" placeholder="Insert book's code" v-model="book.code" @keyup.enter="save">
          </div>
          <div class="input__info">
            <input type="text" class="home__input" placeholder="Insert book's category" v-model="book.category" @keyup.enter="save">
          </div>
          <div class="input__info">
            <input type="text" class="home__input" placeholder="Insert book's author" v-model="book.author" @keyup.enter="save">
          </div>
          <div class="input__info">
            <input type="text" class="home__input" placeholder="Insert book's publisher" v-model="book.publisher" @keyup.enter="save">
          </div>
          <a href="#" class="home__button" @click="save">SAVE</a>
        </div>
        <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Code</th>
            <th>Category</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.book }}</td>
            <td>{{ book.code }}</td>
            <td>{{ book.category }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
            <td>
              <button class="info__button" @click="edit(book)">EDIT</button>
            </td>
          </tr>
        </tbody>

      </table>
      </div>
      
    </section>
  </main>
</template>

<style>

table {
  width: 50%;
  display: inline;
  border: violet;
  font-size: 1rem;
  text-align: center;
  border-spacing: 30px;
}

.home {
  position: relative;
}

.home__container {
  position: relative;
  padding: 7rem 0 2rem;
}

.home__title {
  font-size: var(--biggest-font-size);
  margin-bottom: .75rem;
}

.home__title span {
  background: linear-gradient(90deg,
              var(--second-color) 0%,
              var(--first-color) 100%);
  -webkit-background-clip: text;
  color: transparent;
}

.home__description {
  color: var(--text-color-light);
}

.home__button {
  display: inline-block;
  background: linear-gradient(95deg,
              var(--second-color) 0%,
              var(--first-color) 100%);
  padding: 1rem 2rem;
  border-radius: .25rem;
  color: var(--text-color);
  font-weight: var(--font-semi-bold);
  transition: box-shadow .4s;
}

.info__button {
  display: inline-block;
  background: linear-gradient(95deg,
              var(--second-color) 0%,
              var(--first-color) 100%);
  padding: 1rem 2rem;
  border-radius: .25rem;
  border-color: transparent;
  color: var(--text-color);
  font-family: var(--biggest-font-size);
  font-weight: var(--font-semi-bold);
  transition: box-shadow .4s;
  justify-content: center;
  align-items: center;
}

.info__button:hover {
  box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);
  cursor: pointer;
  color: var(--text-color-light);
}

.home__button:hover {
  box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);
}

.home__input {
  display: inline-block;
  background: linear-gradient(95deg,
              var(--second-color) 0%,
              var(--first-color) 100%);
  padding: 1rem 2rem;
  border-radius: .25rem;
  color: var(--text-color);
  font-family: var(--font-semi-bold);
  border-color: transparent;
}

.input__info {
  margin-top: 1rem;
}

textarea:focus, input:focus{
    outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.home__input::placeholder {
  color: var(--text-color-light);
  font-family: var(--font-semi-bold);
  opacity: 1; /* Firefox */
}

/* Shapes */
.home__shape-small,
.home__shape-big1,
.home__shape-big2 {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

.home__shape-small {
  width: 150px;
  height: 150px;
  background-color: var(--first-color);
  top: -2.5rem;
  left: -1.5rem;
}

.home__shape-big1,
.home__shape-big2 {
  width: 250px;
  height: 250px;
}

.home__shape-big1 {
  background-color: var(--first-color);
  top: 16rem;
  right: -6.5rem;
}

.home__shape-big2 {
  background-color: var(--second-color);
  left: -3.5rem;
  bottom: -4rem;
}

.home__shape-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: .3;
}

@keyframes float-eth {
  0% {
    transform: translateY(.5rem);
  }
  50% {
    transform: translateY(1.5rem);
  }
  100% {
    transform: translateY(.5rem);
  }
}

@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }
}

@media screen and (min-width: 767px) {
  .nav {
    height: calc(var(--header-height) + 1.5rem );
  }
  .nav__toggle,
  .nav__close,
  .nav__img {
    display: none;
  }
  .nav__list {
    flex-direction: row;
    column-gap: 4rem;
  }
  .home__container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-content: center;
    justify-content: center;
    gap: 2rem 4rem;
  }
  .home__button {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .home__title {
    margin-bottom: 1rem;
  }
  .home__description {
    margin-bottom: 1rem;
  }
  .home__shape-small,
  .home__shape-big1,
  .home__shape-big2 {
    filter: blur(132px);
  }
  .home__shape-small {
    width: 300px;
    height: 300px;
    top: -5rem;
    left: -2rem;
  }
  .home__shape-big1,
  .home__shape-big2 {
    width: 400px;
    height: 400px;
  }
  .home__shape-big1 {
    top: 10rem;
    right: -3.5rem;
  }
  .home__shape-big2 {
    left: 14rem;
    bottom: -10rem;
  }
}

@media screen and (min-width: 1048px) {
  .container {
    margin-inline: auto;
  }
}

@media screen and (min-width: 1500px) {
  .home__shape-big2 {
    left: 28rem;
  }
}
</style>