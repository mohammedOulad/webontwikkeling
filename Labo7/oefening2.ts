const fetch = require('node-fetch');

let a:any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((response:any) => response.json());

let b:any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((response:any) => response.json());

let c:any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((response:any) => response.json());

Promise.all([a,b,c]).then((drinks: any) => {
    console.log(drinks);
    for (let drink of drinks) {
        console.log(drinks.drink[0].strDrink);
    }
});
export{};