// fetch API
const fetchChampion = async (champ) => {
  const endopoint = `https://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/${champ}.json`;
  const response = await fetch(endopoint);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  console.log(data);
  return data.data;
};

export default fetchChampion;
