import './globals.scss';
import router from './router';
import fetchDdragon from './API/fetchDragon';

// hello
window.addEventListener('load', () => {
  router(window.location.pathname);
  console.log(window.location);
});

window.addEventListener('popstate', () => {
  router(window.location.pathname);
});

// nav bar things
const navBarOpen = document.getElementsByClassName('lateral-nav-bar__button_open')[0];
const navBarClose = document.getElementsByClassName('lateral-nav-bar__button_close')[0];
const navBar = document.getElementsByClassName('lateral-nav-bar')[0];

navBarOpen.addEventListener('click', () => {
  navBar.style.width = '315px';
});

navBarClose.addEventListener('click', () => {
  navBar.style.width = '0px';
});

