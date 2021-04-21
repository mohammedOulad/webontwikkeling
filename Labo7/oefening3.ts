const fetch = require('node-fetch');

const showAllDadJokes = async() => {
    for (let i=1; i<3;i++) {
    let jokes = await fetch(`https://icanhazdadjoke.com/search?term=dog&limit=5&page=${i}`, {
        headers: {
        'Accept': 'application/json'
        }
    });
    

 export{};