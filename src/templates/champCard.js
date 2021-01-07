import styles from './champCard.module.scss';

const champCard = (champ, champName) => (
  `<div class = ${styles.container}>
    <img src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg' />
    <h2>${champName}</h2>
  </div>`
);

export default champCard;
