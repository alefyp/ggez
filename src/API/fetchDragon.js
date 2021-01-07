// fetch API
const fetchDdragon = async () => {

  const endopoint = 'https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';
  console.log(endopoint);
  const response = await fetch(endopoint);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  console.log(endopoint);
  return data.data;
};

export default fetchDdragon;
