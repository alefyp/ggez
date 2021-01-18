import styles from './champView.module.scss';
import rols from './rolesAssets';

const champView = (title, name, rol, difficulty, lore, id) => {

  console.log(rols);
  return(
    `<div class=${styles.champ__container}>
    <div class=${styles.container__background} style="background-image: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg')"></div>
    <div class=${styles.hero}>
      <img class=${styles['hero__img-asset']} src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg" alt=${id} />
      <h2>${title}</h2>
      <h1>${name}</h1>
      <div ${styles.hero__square}>
        <div ${styles['hero__square-rol']}>
          ${rols[rol]}
          <p>${rol}</p>
        </div>
        
        ${difficulty}
        ${lore}
      </div>
    </div>
  </div>`
  );
}

export default champView;
