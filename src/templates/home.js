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
  <label for="site-search">Search the site:</label>
  <input type="search" id="site-search" name="q" placeholder="Search" aria-label="Search through site content">

  <ul>
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

  <select id="difficulty">
    <option value="All">All difficulties</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
  </nav>

  <section>
    <div>
      <ul id="grid" class=${styles.grid}></ul>
    </div>
  </section>

  <footer>Yap</footer>
  </div>
`
);

export default home;
