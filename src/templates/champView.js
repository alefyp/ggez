import styles from './champView.module.scss';
import rols from './rolesAssets';

const champView = (title, name, rol, difficulty, lore, id) => (
  `<div class=${styles.champ__container}>
  
    <div class=${styles.container__background} style="background-image: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg')"></div>
    <div class=${styles.hero}>
    <button id="champ__home-button" class=${styles['hero__home-button']}>
      <span>Champion List</span>
      <svg viewBox="0 0 14 15"><path d="M12.8 8.4V4.8S13 1.1 7 0h-.1c-6 1.1-5.8 4.8-5.8 4.8v3.6c0 1.9-.8 2.5-.8 2.5C1.5 15.3 4.5 15 4.5 15c-1.6-2.1 0-5.8 0-5.8-2.3-.3-1.9-2.7-1.7-3.4 0 0 2.2-.1 3.3 1.6v4.2l.9.9.8-.8V7.5c1.2-1.8 3.3-1.7 3.3-1.6.2.7.6 3.1-1.7 3.3 0 0 1.6 3.8 0 5.8 0 0 3 .3 4.2-4.1.1 0-.8-.6-.8-2.5z"></path></svg>
    </button>
      <div class=${styles['hero__img-container']}>
        <img class=${styles['hero__img-asset']} src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg" alt=${id} />
      </div>
      <div class=${styles.hero__section}>
        <div class=${styles['hero__section-header']}>
          <h3>${title}</h3>
          <h1>${name}</h1>
        </div>
        <div class=${styles.hero__square}>
          <div class=${styles['hero__square-rol']}>
            ${rols[rol]}
            <h4>ROL</h4>
            <p>${rol}</p>
          </div>
          <div class=${styles['hero__square-difficulty']}>
            <div class=${styles.polygon}>
              <div class="${styles.polygon__item} hero__square-difficulty"></div>
              <div class="${styles.polygon__item} hero__square-difficulty"></div>
              <div class="${styles.polygon__item} hero__square-difficulty"></div>
            </div>
            <h4>Difficulty</h4>
            <p id='hero__identify-difficulty'></p>
          </div>
        </div>
        <div class=${styles.hero__lore}>
          <p>${lore}</p>
        </div>
      </div>
    </div>
  </div>`
);

export default champView;
