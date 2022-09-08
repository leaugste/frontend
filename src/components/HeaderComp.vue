<template>
    <header class="header" id="header">
        <nav class="nav container">
            <a href="" class="nav__logo">
                cookie.lib
            </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link active-link"> <RouterLink to ="/home">Home</RouterLink> </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"> <RouterLink to="/books">Books</RouterLink> </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"> <RouterLink to="/categories">Categories</RouterLink> </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"> <RouterLink to="/authors">Authors</RouterLink> </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"> <RouterLink to="/publishers">Publishers</RouterLink> </a>
                    </li>
                </ul>

                <!-- Close button -->
                <div class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>

                <img src="@/assets/img/cookie_header.png" alt="nav image" class="nav__img">
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
    transition: .3s;
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
        box-shadow: 0 3px 8px hsla(203, 71%, 4%, .2);
        padding: 4rem 0 3.5rem;
        transition: top .4s;
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
    transition: color .4s;
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
    filter: drop-shadow(0 4px 20px hsla(203, 71%, 60%, .5));
}

/* Show menu */
.show-menu  {
    top: 0;
}

/* Active link */
.active-link {
    background: linear-gradient(90deg,
                var(--second-color) 0%,
                var(--first-color));
    -webkit-background-clip: text;
    color: transparent;
}

.header-bg {
    background-color: var(--body-color);
    box-shadow: 0 2px 4px hsla(203, 71%, 15%, .5);
}
</style>