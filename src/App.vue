<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
