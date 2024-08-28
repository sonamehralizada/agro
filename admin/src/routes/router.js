import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // Now fetching user inside the guard
  const user = localStorage.getItem('user'); // Ensure you're using the correct key here
  const isAuthenticated = user !== null;
  const publicPages = ['/login', '/register']; // public routes that don't require authentication
  const authRequired = !publicPages.includes(to.path); // check if authentication is needed
  
  if (authRequired && !isAuthenticated) {
    return next('/login');
  }

  next(); // make sure to always call next()!
});

export default router;
