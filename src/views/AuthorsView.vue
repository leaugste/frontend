<script>
import AuthorsApi from "@/api/authors.js";
const authorsApi = new AuthorsApi();
export default {
  data() {
    return {
      author: {},
      authors: [],
    };
  },
  async created() {
    this.authors = await authorsApi.searchAllTheAuthors();
  },
  methods: {
    async save() {
      if (this.author.id) {
        await authorsApi.updateAuthor(this.author);
      } else {
        await authorsApi.addAuthor(this.author);
      }
      this.authors = await authorsApi.searchAllTheAuthors();
      this.author = {};
    },
    async delete(author) {
      await authors.deleteAuthor(author.id);
      this.authors = await authorsApi.searchAllTheAuthors();
    },
    edit(author) {
      Object.assign(this.author, author);
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
      <img src="@/assets/img/shape-bg.png" alt="" class="home__shape-bg" />

      <div class="home__container container">
        <div class="home__info">
          <h1 class="home__title">
            <span>Authors</span>
          </h1>
          <p class="home__description">Insert the info below.</p>
          <div class="input__info">
            <input
              type="text"
              class="home__input"
              placeholder="Insert author's name"
              v-model="author.author"
              @keyup.enter="save"
            />
          </div>
          <div class="input__info">
            <input
              type="number"
              class="home__input"
              placeholder="Insert author's age"
              v-model="author.age"
              @keyup.enter="save"
            />
          </div>
          <div class="input__info">
            <input
              type="text"
              class="home__input"
              placeholder="Insert authors's country"
              v-model="author.country"
              @keyup.enter="save"
            />
          </div>
          <div class="input__info">
            <input
              type="text"
              class="home__input"
              placeholder="Insert author's nickname"
              v-model="author.aka"
              @keyup.enter="save"
            />
          </div>
          <a href="#" class="home__button" @click="save">SAVE</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Age</th>
              <th>Country</th>
              <th>AKA</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="author in authors" :key="author.id">
              <td>{{ author.author }}</td>
              <td>{{ author.age }}</td>
              <td>{{ author.country }}</td>
              <td>{{ author.aka }}</td>
              <td>
                <button class="info__button" @click="edit(author)">EDIT</button>
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
  margin-bottom: 0.75rem;
}

.home__title span {
  background: linear-gradient(
    90deg,
    var(--second-color) 0%,
    var(--first-color) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
}

.home__description {
  color: var(--text-color-light);
}

.home__button {
  display: inline-block;
  background: linear-gradient(
    95deg,
    var(--second-color) 0%,
    var(--first-color) 100%
  );
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-color);
  font-weight: var(--font-semi-bold);
  transition: box-shadow 0.4s;
}

.info__button {
  display: inline-block;
  background: linear-gradient(
    95deg,
    var(--second-color) 0%,
    var(--first-color) 100%
  );
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border-color: transparent;
  color: var(--text-color);
  font-family: var(--biggest-font-size);
  font-weight: var(--font-semi-bold);
  transition: box-shadow 0.4s;
  justify-content: center;
  align-items: center;
}

.info__button:hover {
  box-shadow: 0 8px 48px hsla(203, 71%, 25%, 0.5);
  cursor: pointer;
  color: var(--text-color-light);
}

.home__button:hover {
  box-shadow: 0 8px 48px hsla(203, 71%, 25%, 0.5);
}

.home__input {
  display: inline-block;
  background: linear-gradient(
    95deg,
    var(--second-color) 0%,
    var(--first-color) 100%
  );
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-color);
  font-family: var(--font-semi-bold);
  border-color: transparent;
}

.input__info {
  margin-top: 1rem;
}

textarea:focus,
input:focus {
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
  opacity: 0.3;
}

@keyframes float-eth {
  0% {
    transform: translateY(0.5rem);
  }
  50% {
    transform: translateY(1.5rem);
  }
  100% {
    transform: translateY(0.5rem);
  }
}

@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }
}

@media screen and (min-width: 767px) {
  .nav {
    height: calc(var(--header-height) + 1.5rem);
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
