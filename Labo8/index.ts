import { profile} from "node:console";

const express = require('express');
const app = express();
const ejs = require('ejs')
app.set('port', 3000);
app.set('view engine', 'ejs');

const thisisme = {
    name:'Mohammed Oulad mhand',
    age: 22,
    profilePic: 'https://www.nautiljon.com/images/description/00/04/1584134379085_image.jpg'
};
app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('zats absolutly crazy')
});
app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.render('whoami',{name: thisisme.name, age: thisisme.age, profilePic:thisisme.profilePic})
});
app.get('/whoamijson',(req:any,res:any)=>{
res.json(thisisme);
});
app.get('/pikachujson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello world>')
});
app.get('/pikachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello world')
});


app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

export{};