const fetch = require('node-fetch');
let a:any = fetch(fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
);
let b:any = fetch(fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
);
let c:any = fetch(fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
);
Promise.all([a,b,c]).then((values: any) => {
    console.log(values);
});
export{};