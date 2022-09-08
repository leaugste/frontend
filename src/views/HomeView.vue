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
            <span>Organize</span> <br>
            Track and <br>
            control your library.
          </h1>
          <p class="home__description">
            Keep all the necessary info in <strong>one</strong> place.
          </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="home__button">DON'T CLICK HERE</a>
        </div>

        <div class="home__group">
          <div class="home__images">
            <div class="home__img-cookie">
              <img src="@/assets/img/cookie_home.png" alt="home image">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
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
  margin-bottom: 1.5rem;
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

.home__button:hover {
  box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);
}

.home__group {
  position: relative;
}

.home__images {
  display: grid;
}

.home__img-cookie {
  width: 100px;
  justify-self: center;
}

.home__img-cookie img {
  filter: drop-shadow(0 4px 32px hsl(341, 48%, 53%));
  animation: float-eth 4s ease-in-out infinite;
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

  .home__img-cookie {
    width: 80px;
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
  .home__group {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    align-self: center;
  }
}

@media screen and (min-width: 1024px) {
  .home__title {
    margin-bottom: 1rem;
  }
  .home__description {
    margin-bottom: 3rem;
  }
  .home__img-cookie {
    width: 200px;
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