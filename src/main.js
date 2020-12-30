import router from './router';

// hello
window.addEventListener('load', () => {
  router(window.location.hash);
});
