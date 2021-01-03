// fetch API
const fetchDdragon = async () => {
  const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json');
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data.data;
};

export default fetchDdragon;
