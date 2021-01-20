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

  console.log(lore);

  return champView(title, name, tags[0], info.difficulty, lore, id);
};

export default champController;
