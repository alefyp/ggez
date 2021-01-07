import champOverview from './champOverview';
import homeController from './controllers/home';
// import notFoundOverview from '/notFoundOverview';

const router = async (pathname) => {
  const champName = pathname.split('/')[2];
  console.log(pathname);
  console.log(window.location.hostname);

  if (pathname === '' || pathname === '/ggez' || pathname === '/ggez/') {
    homeController();
  }
  else {
    root.innerHTML = `Holonho ${champName}`;
  }
};

export default router;
