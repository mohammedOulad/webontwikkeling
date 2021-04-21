const fetch = require("node-fetch");

const showAllDadJokes = async () => {
  for (let i = 1; i < 3; i++) {
    let jokes = await fetch(`https://icanhazdadjoke.com/search?term=dog&page=${i}`,{
        headers: {
          Accept: "application/json"
        }
      });
    let jokesJson = await jokes.json();

   //console.log(jokesJson);
      for (let i = 0; i < 12 ; i++){
      console.log(jokesJson.results[i].joke)
      }
}};
showAllDadJokes();
export {};
