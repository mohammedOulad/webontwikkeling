const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
app.use(express.json({ limit: '1mb' }));
//app.use(express.urlencoded({ extended:true}))  //inclde header enzo...
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));


let movies = [
    {name: "Classroom of the elite", myScore: 90},
    {name: "Solo Leveling", myScore: 100},
    {name: "Beginning after the end", myScore: 99},
    {name: "Darwin's game", myScore: 85}
];
app.get('/movies/:id',(req:any, res:any)=>{
    let id = req.params.id;
    console.log(id)
    res.render("movie", {naam:movies[id].name, score:movies[id].myScore} );
});

app.get('/movies',(req:any,res:any)=>{  
    res.render('movies',{movies: movies})
});

app.get('/',(req:any,res:any)=>{  
    res.type('text/html');
    res.render('landingpage')
});

app.get('/addMovie',(req:any,res:any)=>{  
    res.render('addMovie')
});

app.post('/addMovie',(req:any, res:any)=>{
    res.render('addMovie')
    movies.push({name: req.body.title,myScore: req.body.score})
})



app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{}