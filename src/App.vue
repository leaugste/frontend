<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
</script>

<template>
  <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
  </head>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
