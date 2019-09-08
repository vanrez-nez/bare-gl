
import Demo from './views/Demo.vue';
import Home from './views/Home.vue';
import demos from './demos.json';

const demoRoutes = demos.map(entry => ({
  path: `/${entry.slug}`,
  name: entry.slug,
  component: Demo,
}));

const routes = {
  base: '/',
  mode: 'history',
  routes: [
    ...demoRoutes,
    { path: '/', name: 'home', component: Home },
  ],
};

export default routes;
