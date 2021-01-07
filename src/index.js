import './globals.scss';
import router from './router';
import fetchDdragon from './API/fetchDragon';

// hello
window.addEventListener('load', () => {
  router(window.location.pathname);
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

const riotNavBar = document.getElementsByClassName('lateral-riotbar')[0];
const riotNavBarClose = document.getElementsByClassName('lateral-riotbar__button_close')[0];
const riotNavBarOpen = document.getElementsByClassName('lateral-riotbar__button_open')[0];

riotNavBarOpen.addEventListener('click', () => {
  riotNavBar.style.width = '280px';
});

riotNavBarClose.addEventListener('click', () => {
  riotNavBar.style.width = '0';
});
