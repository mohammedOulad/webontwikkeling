const express = require('express');
const app = express();
app.set('port', 3000);

app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});
app.get('/whoamijson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});
app.get('/pikachujson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});
app.get('/pikachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));







    
