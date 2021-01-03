import styles from './home.module.scss';

const home = () => (
  `
  <section>
    <h1>Choose your <span>CHAMPION</span></h1>
    <p>
      With more than 140 champions, you’ll find the perfect match for your
      playstyle. Master one, or master them all.
    </p>
  </section>

  <nav>
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
    <div id="grid"></div>
  </section>

  <footer>Yap</footer>
`
);

export default home;
