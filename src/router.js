import champOverview from './champOverview';
import homeController from './controllers/home';
// import notFoundOverview from '/notFoundOverview';

const router = async (pathname) => {
  const champName = pathname.split('/')[1];

  if (pathname === '' || pathname === '/') {
    homeController();
  } 
  else {
    root.innerHTML = `Holonho ${champName}`;
  }
};

export default router;
