import fetchChampion from '../API/fetchChampion';
import champView from '../templates/champView';
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
  } = champInfo[champ];

  root.innerHTML = champView(title, name, tags[0], info.difficulty, lore, id);

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
};

export default champController;
