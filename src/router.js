import champController from './controllers/champ';
import homeController from './controllers/home';
import fetchDdragon from './API/fetchDragon';
import notFoundController from './controllers/notFound';
import notFound from './templates/notFound';

const router = async (pathname) => {
  const champName = pathname.split('/')[1];
  const upsss = pathname.split('/')[2];
  let urlChampList = [];
  urlChampList = Object.keys(await fetchDdragon());
  const root = document.getElementById('root');

  if (pathname === '' || pathname === '/') {
    homeController();
  }

  if (urlChampList.includes(champName)) {
    root.innerHTML = await champController(champName);
  }
};

export default router;
