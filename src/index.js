import taco from './assets/taco.svg';
import './styles.scss';
import { filterByRol, filterByDifficulty, searchByInput } from './filters';
import router from './router';

const root = document.getElementById('root');
const boton = document.getElementsByClassName('algo')[0];
const rolButtons = document.getElementsByClassName('rol-btn');
const rolSelection = document.getElementsByClassName('rol-active');
const searchInput = document.querySelector('#site-search');
const difficultySelect = document.querySelector('#difficulty');
const individualChamps = document.getElementsByClassName('champ-solito');

// filter params
const store = {
  search: '',
  difficulty: 'All',
  rol: 'All',
};

// fetch
const fetchDdragon = async () => {
  const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json');
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    root.textContent = 'ooops something went wrong!';
    throw new Error(message);
  }

  const data = await response.json();
  return data.data;
};

// render
const showChamps = async (store, data) => {
  const champs = await data();
  let result = champs;

  // Applying filters
  result = searchByInput(result, store.search);
  if (store.rol !== 'All') {
    result = filterByRol(result, store.rol);
  }
  if (store.difficulty !== 'All') {
    result = filterByDifficulty(result, store.difficulty);
  }

  // now... finally!
  root.innerHTML = '';
  const ul = document.createElement('ul');
  const names = Object.keys(result);

  names.forEach((champ) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'champ_solito');
    li.addEventListener('click', () => {
      window.history.pushState(
      {},
      '',
      window.location.origin + `/${champ}`);
      router(window.location.pathname, fetchDdragon);
  });

    // window.location.pathname = `/${champ}`
    li.innerHTML = `
      <img src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg' />
      <p>${result[champ].name}</p>`;
    ul.appendChild(li);
  });

  root.appendChild(ul);
};

// DOM manipulation

// Select Rol
for (let i = 0; i < rolButtons.length; i++) {
  rolButtons[i].addEventListener('click', () => {
    rolSelection[0].classList.remove('rol-active');
    rolButtons[i].classList.add('rol-active');
    store.rol = rolSelection[0].name;
    showChamps(store, fetchDdragon);
  });
}

// Search by name - word
searchInput.addEventListener('input', (e) => {
  store.search = e.target.value;
  showChamps(store, fetchDdragon);
});

// Filter by difficulty
difficultySelect.addEventListener('change', (e) => {
  store.difficulty = e.target.value;
  showChamps(store, fetchDdragon);
});

// Single Web App

// not yet
boton.addEventListener('click', () => {
  window.location.href = '/bard';
});

window.addEventListener('popstate', (e) => {
  router(window.location.pathname, fetchDdragon);
});
// window.onpopstate = () => {
//   alert('aaaaaaaaaaaaaaaaaah');
//   console.log('algo está pazanda');
//   root.innerHTML = '';
//   //rootDiv.innerHTML = routes[window.location.pathname]
// };

// window.addEventListener('hashchange', () => {
//   router(window.location.hash);
// });

window.addEventListener('load', () => {
  router(window.location.pathname, fetchDdragon);
});
// Start

showChamps(store, fetchDdragon);
