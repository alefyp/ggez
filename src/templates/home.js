const home = `
  <nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
  </nav>
  <header>
  <h1>Choose your <span>CHAMPION</span></h1>
  <p>
    With more than 140 champions, you’ll find the perfect match for your
    playstyle. Master one, or master them all.
  </p>
  </header>

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

  <main>
  <button class="algo">Ir a otra pagina</button>
  <div id="root"></div>

  </main>

  <footer>Yap</footer>
`;

export default home;
