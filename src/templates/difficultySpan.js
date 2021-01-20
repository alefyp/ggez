import styles from './difficultySpan.module.scss';

const polygon = (level) => {
  const polyBase = `
  <div class=${styles.container}>
    <div class=${styles.polygon}></div>
    <div class=${styles.polygon}></div>
    <div class=${styles.polygon}></div>
  </div>`;
  return polyBase;
};

// const domPolygon = document.getElementsByClassName(styles.polygon);
// // eslint-disable-next-line no-undef
// if (level === 'Easy') {
//     // eslint-disable-next-line no-sequences
//     domPolygon[1].style.opacity = '1';
//   }

const difficultyRender = (num) => {
  switch (num) {
    case 1:
    case 2:
    case 3:
    case 4:
      return [polygon(), 'Easy'];
    case 5:
    case 6:
    case 7:
      return [polygon(), 'Moderate'];
    default:
      return [polygon(), 'Hard'];
  }
};

export default difficultyRender;
