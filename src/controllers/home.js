import { filterByRol, filterByDifficulty, filterByInput } from '../filters';
import router from '../router';
import home from '../templates/home';
import fetchDdragon from '../API/fetchDragon';
import champCard from '../templates/champCard';

const homeController = () => {
  // template
  const root = document.getElementById('root');
  root.innerHTML = home;

  // grabbing dom elements
  const grid = document.getElementById('grid');
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

  //  ## Render ##
  const showChamps = async (store, data) => {
    const champs = await data();
    let result = champs;

    // Applying filters
    result = filterByInput(result, store.search);
    if (store.rol !== 'All') {
      result = filterByRol(result, store.rol);
    }
    if (store.difficulty !== 'All') {
      result = filterByDifficulty(result, store.difficulty);
    }

    // now... finally!
    grid.innerHTML = '';
    //const ul = document.createElement('ul');
    const names = Object.keys(result);

    names.forEach((champ) => {
      const li = document.createElement('li');
      li.addEventListener('click', () => {
        window.history.pushState({}, '', `${window.location.href}${champ}`);
        dispatchEvent(new PopStateEvent('popstate'));
      });

      li.innerHTML = champCard(champ, result[champ].name);
      grid.appendChild(li);
    });

    //grid.appendChild(ul);
  };

  // ###### DOM manipulation #######

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

  // Default show at start
  showChamps(store, fetchDdragon);

  // Styling controls
  const searchIcon = document.getElementById('search-icon');
  searchIcon.addEventListener('click', () => console.log('svgggggggg'));
};

export default homeController;
