import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: TeamList,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
