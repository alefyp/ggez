import fetchChampion from '../API/fetchChampion';
import champView from '../templates/champView';
import abilitiesSection from '../templates/abilitiesSection';
import styles from '../templates/abilitiesSection.module.scss';
// Select champion, next view
const champController = async (champ) => {
  const root = document.getElementById('root');
  const champInfo = await fetchChampion(champ);
  const {
    title,
    lore,
    tags,
    info,
    id,
    name,
    passive,
  } = champInfo[champ];

  const abilities = champInfo[champ].spells;

  // eslint-disable-next-line max-len
  root.innerHTML = champView(title, name, tags[0], info.difficulty, lore, id) + abilitiesSection(abilities, passive);

  // el cuadrito de dificultad
  const polygons = document.getElementsByClassName('hero__square-difficulty');
  const difficultyText = document.getElementById('hero__identify-difficulty');

  switch (info.difficulty) {
    case 1:
    case 2:
    case 3:
      difficultyText.innerHTML = 'Easy';
      polygons[1].style.opacity = 0.2;
      polygons[2].style.opacity = 0.2;
      break;
    case 4:
    case 5:
    case 6:
      polygons[0].style.opacity = 1;
      polygons[1].style.opacity = 1;
      polygons[2].style.opacity = 0.2;
      difficultyText.innerHTML = 'Moderate';
      break;
    default:
      polygons[0].style.opacity = 1;
      polygons[1].style.opacity = 1;
      polygons[2].style.opacity = 1;
      difficultyText.innerHTML = 'Hard';
      break;
  }

  const homeButton = document.getElementById('champ__home-button');
  homeButton.addEventListener('click', () => {
    console.log('llevame a casita');
    window.history.pushState({}, '', window.location.origin);
    dispatchEvent(new PopStateEvent('popstate'));
  });

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  const domAbilities = [...document.getElementsByClassName('abilities')];

  const abilityType = document.getElementById(styles.abilities__type);
  const abilityName = document.getElementById(styles.abilities__name);
  const abilityDescription = document.getElementById(styles.abilities__description);
  const showKeycaps = ['PASSIVE', 'Q', 'W', 'E', 'R'];

  // Default
  [abilityType.textContent] = showKeycaps;
  abilityDescription.innerHTML = passive.description;
  abilityName.textContent = passive.name;

  const abilityActive = document.getElementsByClassName(styles['abilities__item-active']);

  for (let i = 0; i < domAbilities.length; i++) {
    if (i === 0) {
      domAbilities[i].addEventListener('click', () => {
        abilityType.textContent = showKeycaps[i];
        abilityDescription.innerHTML = passive.description;
        abilityName.textContent = passive.name;
        abilityActive[0].classList.remove(styles['abilities__item-active']);
        domAbilities[i].classList.add(styles['abilities__item-active']);
      });
    } else {
      domAbilities[i].addEventListener('click', () => {
        abilityType.textContent = showKeycaps[i];
        abilityDescription.innerHTML = abilities[i - 1].description;
        abilityName.textContent = abilities[i - 1].name;
        abilityActive[0].classList.remove(styles['abilities__item-active']);
        domAbilities[i].classList.add(styles['abilities__item-active']);
      });
    }
  }
};

export default champController;
