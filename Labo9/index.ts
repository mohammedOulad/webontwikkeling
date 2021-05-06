const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',(req:any,res:any)=>{  
    res.type('text/html');
    res.render('landingpage')
});
app.get('/movies',(req:any,res:any)=>{  
    res.render('movies')
});
app.get('/header',(req:any,res:any)=>{  
    res.render('header')
});



/*
app.post('/addmovie',(req:any, res:any)=>{
    let title = req.body.fname;
    let myScore = req.body.lname;
    res.type('text/html')
    res.send(`Hello ${title} ${myScore}`);
})*/

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{}