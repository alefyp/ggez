import styles from './home.module.scss';

const home = (
  `
  <div class="${styles.container}">
  <section class= ${styles['header-section']}>
    <h1>
      <span class=${styles['header-section__intro']}>CHOOSE YOUR</span> 
      <span class=${styles['header-section__title']}>CHAMPION</span>
    </h1>
    <div class=${styles['header-section__paragraph']}>
      <p>
        With more than 140 champions, you’ll find the perfect match for your
        playstyle. Master one, or master them all.
      </p>
    </div>
    
  </section>

  <nav class= ${styles['nav-filters']}>
  <div class = ${styles['nav-filters__search_container']}>
  <svg id="search-icon" class=${styles['nav-filters__search_icon']} height="100%" length="auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
	<path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474    c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323    c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848    S326.847,409.323,225.474,409.323z"/>
	<path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
</svg>
    <input type="search" id="site-search" class=${styles['nav-filters__search_input']} placeholder="SEARCH" aria-label="Search through site content">
  </div>
  
  <ul class=${styles['nav-filters__rol_select']}>
    <li>
      <button name="All"class="rol-btn rol-active">All</button>
    </li>
    <li>
      <button name = "Assassin"class="rol-btn">Assassins</button>
    </li>
    <li>
      <button name="Fighter" class="rol-btn">Fighters</button>
    </li>
    <li>
      <button name = "Mage" class="rol-btn">Mages</button>
    </li>
    <li>
      <button name="Marksman" class="rol-btn">Marksmen</button>
    </li>
    <li>
      <button name="Support" class="rol-btn">Supports</button>
    </li>
    <li>
      <button name="Tank" class="rol-btn">Tank</button>
    </li>
  </ul>

  <div class="${styles['nav-filters__difficulty-select']}">
    <select id="difficulty">
      <option value="All">All difficulties</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  </div>
  </nav>

  <section>
    <div>
      <ul id="grid" class=${styles.grid}></ul>
    </div>
  </section>

  <footer class="${styles.footer}">
    <p>This project is for educational purposes only. It's not endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. Visit the <a href="https://github.com/alefyp/ggez">Github repository</a> for more information.</p>
    <p>League of Legends and Riot Games are trademarks, service marks, and registered trademarks of Riot Games, Inc.</p>
  </footer>
  </div>
`
);

export default home;
