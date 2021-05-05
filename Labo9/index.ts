import { profile} from "node:console";

const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
app.set('port', 3000);
app.set('view engine', 'ejs');

let movies = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fuction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}
];
app.get('/',(req:any,res:any)=>{  // root res type html t
    res.type('text/html');
    res.send('zats absolutly crazy')
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{}