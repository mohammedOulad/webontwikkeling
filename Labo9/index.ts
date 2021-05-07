const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

let movies = [
    {name: "Classroom of the elite", myScore: 90},
    {name: "Solo Leveling", myScore: 100},
    {name: "Beginning after the end", myScore: 95},
    {name: "Darwin's game", myScore: 100}
];
app.get('/',(req:any,res:any)=>{  
    res.type('text/html');
    res.render('landingpage')
});
app.get('/movies',(req:any,res:any)=>{  
    res.render('movies',{animes:movies })
});
app.get('/movie',(req:any,res:any)=>{  
    res.render('movie')
});

app.get('/addmovie',(req:any, res:any)=>{
    let title = req.params.title;
    res.type('text/html')
    res.render("animeS", {name:movies[title].name, score:movies[title].myScore, } );
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{}