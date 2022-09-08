<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="" class="nav__logo"> cookie.lib </a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">
              <RouterLink to="/home">Home</RouterLink>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <RouterLink to="/books">Books</RouterLink>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <RouterLink to="/categories">Categories</RouterLink>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <RouterLink to="/authors">Authors</RouterLink>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <RouterLink to="/publishers">Publishers</RouterLink>
            </a>
          </li>
        </ul>

        <img
          src="@/assets/img/cookie_header.png"
          alt="nav image"
          class="nav__img"
        />
      </div>

      <!-- Toggle button -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-menu-4-line"></i>
      </div>
    </nav>
  </header>
</template>

<style>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  transition: 0.3s;
}

.nav {
  position: relative;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo,
.nav__toggle,
.nav__link,
.nav__close {
  color: var(--text-color);
}

.nav__toggle {
  display: inline-flex;
  font-size: 1.25rem;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    background-color: var(--body-color);
    width: 100%;
    left: 0;
    top: -100%;
    box-shadow: 0 3px 8px hsla(203, 71%, 4%, 0.2);
    padding: 4rem 0 3.5rem;
    transition: top 0.4s;
    overflow: hidden;
  }
}

.nav__list {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 2rem;
}

.nav__link {
  font-weight: var(--font-semi-bold);
  transition: color 0.4s;
}

.nav__link:hover {
  color: var(--first-color);
}

.nav__close,
.nav__img {
  position: absolute;
}

.nav__close {
  top: 1rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav__img {
  width: 80px;
  left: 1rem;
  bottom: -2rem;
  filter: drop-shadow(0 4px 20px hsla(203, 71%, 60%, 0.5));
}

.header-bg {
  background-color: var(--body-color);
  box-shadow: 0 2px 4px hsla(203, 71%, 15%, 0.5);
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
