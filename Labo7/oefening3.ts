const fetch = require("node-fetch");

const showAllDadJokes = async () => {
  let aantalPaginas = await fetch(
    `https://icanhazdadjoke.com/search?term=dog&limit=5&page=1`,
    {
      headers: {
        'Accept': 'application/json'
      }
    }
  )
  
  let aantalPaginasJson = await aantalPaginas.json();

  for (let i = 1; i <= aantalPaginasJson.total_pages; i++) {
    let jokes = await fetch(
      `https://icanhazdadjoke.com/search?term=dog&limit=5&page=${i}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    )
    let jokesJson = await jokes.json();

    //console.log(jokesJson);
    for (let x = 0; x < jokesJson.results.length ; x++) {
      console.log(jokesJson.results[x].joke);
      //console.log(jokesJson.results.length);
    }
  }
};
showAllDadJokes();
export {};
