import champOverview from './champOverview';
import homeController from './controllers/home';
// import notFoundOverview from '/notFoundOverview';

const router = async (pathname) => {
  const champName = pathname.split('/')[1];
  const upsss = pathname.split('/')[2];
  const root = document.getElementById('root');
  console.log(pathname);
  console.log(window.location.hostname);

  if (pathname === '' || pathname === '/') {
    homeController();
  }

  if(upsss){
    root.innerHTML = `PAGE NOT FUCKING FOUND`;
  }
  
  if(champName === 'Ahri'){
    root.innerHTML = `Holonho ${champName}`;
  }
    
  
};

export default router;
