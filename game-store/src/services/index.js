export  const getGames = async () => {
  try {
    const resultFetch = fetch('https://www.freetogame.com/api/games');
    return (await resultFetch).json();
  } catch(e) {
    console.error(e);
  }
}