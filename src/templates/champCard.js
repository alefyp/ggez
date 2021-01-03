import styles from './champCard.module.scss';

const champCard = (champ, champName) => (
  `<div class = ${styles.container}>
    <img src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg' />
    <p>${champName}</p>
  </div>`
);

export default champCard;
