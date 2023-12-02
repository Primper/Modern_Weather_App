<template>
  <div class="flex flex-col min-h-screen font-Montserrat
  bg-weather-primary">
    <RouterView/>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<style lang="scss" scoped>

</style>