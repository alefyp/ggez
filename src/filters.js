// pendiente mover todo a una sola función

export const filterByInput = (data, searchTerm) => {
  const filteredChamps = Object.keys(data).filter((champKey) => {
    return data[champKey].name.toLowerCase().includes(searchTerm.toLowerCase());
  }).reduce((res, key) => (res[key] = data[key], res), {});
  return filteredChamps;
};

export const filterByRol = (data, rol) => {
  const filteredChamps = Object.keys(data).filter((champKey) => {
    return (data[champKey].tags[0] == rol ||data[champKey].tags[1] == rol);
  }).reduce((res, key) => (res[key] = data[key], res), {});
  return filteredChamps;
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

  const filteredChamps = Object.keys(data).filter((champKey) => {
    return (data[champKey].info.difficulty <= range[1] && data[champKey].info.difficulty >= range[0]);
  }).reduce((res, key) => (res[key] = data[key], res), {});
  return filteredChamps;
};
