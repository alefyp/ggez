import champOverview from './champOverview';

const router = (route) => {

  if(route){
    console.log('hay ruta');
  } else {
    console.log('estoy en home');
  }
  console.log(route, window.location.pathname);

  const root = document.getElementsByTagName('body');
  root.innerHTML = `ahora estoy en ${window.location.pathname}`;

  return 'I am a router and I am doing something!';
};

export default router;
