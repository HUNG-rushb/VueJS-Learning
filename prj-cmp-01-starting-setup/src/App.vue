<template>
  <div>
    <the-header title="Remember me"></the-header>

    <!-- <stored-resources :resources="storedResources"> </stored-resources> -->
    <the-resources></the-resources>
  </div>
</template>

<script>
// import LearningResource from './components/LearnningResource.vue';
// import StoredResources from './components/learing-resources/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learing-resources/TheResources.vue';

export default {
  components: { TheHeader, TheResources }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
