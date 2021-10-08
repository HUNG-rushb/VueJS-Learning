<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="selectedResButtonMode"
        >Store Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>

    <component :is="selectedTab"> </component>
  </div>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default defineComponent({
  data() {
    return {
      selectedTab: 'Stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          descriptionn: 'The Official VueJS documentationn',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          descriptionn: 'Just Google',
          link: 'http://google.com'
        }
      ]
    };
  },

  provide() {
    return {
      resources: this.StoredResource
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
});
</script>
