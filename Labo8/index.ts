const express = require('express');
const ejs = require('ejs')
const fetch = require('node-fetch')
const app = express();
app.set('port', 3000);
app.set('view engine', 'ejs');


const thisisme = {
    name:'Mohammed Oulad mhand',
    age: 22,
    profilePic: 'https://www.nautiljon.com/images/description/00/04/1584134379085_image.jpg'
};
app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.render('whoami',{name: thisisme.name, age: thisisme.age, profilePic:thisisme.profilePic})
});

app.get('/',(req:any,res:any)=>{  
    res.type('text/html');
    res.render('hello')
});

app.get('/whoamijson',(req:any,res:any)=>{
    res.json(thisisme);
});

let pikachuu: any= undefined;

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((res:any) => res.json())
    .then((json:any) =>{
        pikachuu = json;
    })

app.get('/pikachujson',(req:any,res:any)=>{
        res.json(pikachuu)
    });

app.get('/pikachuhtml',(req:any,res:any)=>{
        res.render('pikachu', pikachuu);
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{};