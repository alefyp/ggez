import styles from './abilitiesSection.module.scss';

const abilitiesSection = (abilitiesObj, passive) => {
  const images = abilitiesObj.map((ability) => {
    const indImage = `
      <div class="${styles.abilities__item} abilities">
        <button>
          <img class="ability__image" src='https://ddragon.leagueoflegends.com/cdn/11.1.1/img/spell/${ability.image.full}' />
        </button>
      </div>`;
    return indImage;
  });

  const literalImg = images.join('');
  return `<section class=${styles.abilities}>
            <div class ="${styles.abilities__container}">
              <div class="${styles.abilities__item} abilities ${styles['abilities__item-active']}">
                <button>
                  <img class = "passive__image" src='https://ddragon.leagueoflegends.com/cdn/11.1.1/img/passive/${passive.image.full}' />
                </button>
              </div>
              ${literalImg}
            </div>
            <div class="${styles.abilities__square}">
              <p id="${styles.abilities__type}"></p>
              <h2 id="${styles.abilities__name}"></h2>
              <p id="${styles.abilities__description}"></p>
            </div>
          </section>`;
};

export default abilitiesSection;
