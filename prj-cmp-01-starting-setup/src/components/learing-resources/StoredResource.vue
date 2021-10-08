<template>
  <ul>
    <learnning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learnning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearnningResource.vue';

export default {
  inject: ['resources'],
  components: {
    LearningResource
  }
  // storedResources: [
  //   {
  //     id: 'official-guide',
  //     title: 'Official Guide',
  //     descriptionn: 'The Official VueJS documentationn',
  //     link: 'https://vuejs.org'
  //   },
  //   {
  //     id: 'google',
  //     title: 'Google',
  //     descriptionn: 'Just Google',
  //     link: 'http://google.com'
  //   }
  // ]
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
