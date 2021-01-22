import { filterByRol, filterByDifficulty, filterByInput } from '../filters';
import home from '../templates/home';
import fetchDdragon from '../API/fetchDragon';
import champCard from '../templates/champCard';
import styles from '../templates/home.module.scss';

const homeController = () => {
  // template
  const root = document.getElementById('root');
  root.innerHTML = home;

  // grabbing dom elements
  const grid = document.getElementById('grid');
  const rolButtons = document.getElementsByClassName('rol-btn');
  const rolSelection = document.getElementsByClassName('rol-active');
  const searchInput = document.querySelector('#site-search');
  const difficultySelect = document.querySelector('#difficulty');

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

  console.log(styles['nav-filters__difficulty-select']);

  // Custom select
  // difficultySelect
  // this select will be a funny story LOL
  // soy estúpida XDDDDDDDDDDDDDDDD
};

export default homeController;
