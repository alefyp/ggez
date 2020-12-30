import champOverview from './champOverview';
import homeOverview from './templates/home';
// import notFoundOverview from '/notFoundOverview';

const router = async (pathname, data) => {
  const root = document.getElementById('root');
  const pathnameObj = Object.keys(await data());
  const champName = pathname.split('/')[1];

  if (pathname === '/') {
    root.innerHTML = 'home';
  } else if (pathnameObj.includes(champName)) {
    root.innerHTML = `Holonho ${champName}`;
  } else {
    root.innerHTML = 'not found';
  }
};

export default router;
  