import notFound from '../templates/notFound';

const notFoundController = () => {
  // template
  const root = document.getElementById('root');
  root.innerHTML = notFound;
};

export default notFoundController;
