export const filterByInput = (data, searchTerm) => {
  const filterBy = searchTerm.toLowerCase();
  const daticosp = Object.values(data);
  const total = daticosp.filter((champ) => champ.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  return total;
};

export const filterByRol = (data, rol) => {
  const datin = Object.values(data);
  const total = datin.filter((champ) => champ.tags[0] === rol || champ.tags[1] === rol);
  return total;
};

export const filterByDifficulty = (data, difficulty) => {
  let range = [];
  // eslint-disable-next-line default-case
  switch (difficulty) {
    case 'Easy':
      range = [1, 3];
      break;
    case 'Medium':
      range = [4, 6];
      break;
    case 'Hard':
      range = [7, 9];
  }

  const datin = Object.values(data);
  // eslint-disable-next-line max-len
  const total = datin.filter((champ) => champ.info.difficulty <= range[1] && champ.info.difficulty >= range[0]);
  return total;
};
