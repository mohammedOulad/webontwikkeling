const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://Droide123:Droide123@webontwikkelingcluster.b7i1j.mongodb.net/webontwikkelingcluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
app.use(express.json({ limit: '1mb' }));
//app.use(express.urlencoded({ extended:true}))  //inclde header enzo...
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));


interface MoviesData {
  name: string;
  myScore: number;
  timesViewed: number;
}

let movies = [
    {name: "Classroom of the elite", myScore: 90},
    {name: "Solo Leveling", myScore: 100},
    {name: "Beginning after the end", myScore: 99},
    {name: "Darwin's game", myScore: 85}
];
let movieData:any = undefined;

const connectClient = async () => {
    try {
      await client.connect();
      //let list = await client.db().admin().listDatabase();
      //console.log(list);
  
      //insertmany movies in mongodb
      //await client.db('WebOntwikkeling').collection('Movies').insertMany(movies); insert many movies in mongodb
  
      //toont de eerste film in de db
      // let result = await client.db('WebOntwikkeling').collection('Movies').findOne({});
      // console.log(result);
  
      /*toont een lijst van alle scores van alle films
      let cursor = await client.db("WebOntwikkeling").collection("Movies").find({});
      let result2 = await cursor.toArray();
      for (let i = 0; i < result2.length; i++) {
          console.log(result2[i].name);}*/
          
  
      /*Toont de som van totaal aantal keer bekeken
      let cursor = await client.db("WebOntwikkeling").collection("Movies").find({});
      let result2 = await cursor.toArray();
      console.log("de som: ",result2.reduce((a,b) =>  a + b.timesViewed,0));
      */
  
  /* Toon een lijst van alle films met een score tussen 30 en 85
      let cursor = await client.db("WebOntwikkeling").collection("Movies")
      .find({ myScore: { $gt: 30, $lt: 85 } })
      let result2 = await cursor.toArray();
      for (let i = 0; i < result2.length; i++) {
      console.log(result2[i].name);}
  */
  
      let cursor = await client.db("WebOntwikkeling").collection("Movies")
      .find({$or:[ {myScore: { $gte: 30, $lte: 85 } }, {timesViewed: {$eq: 1} } ]});
  
      let result2 = await cursor.toArray();
      for (let i = 0; i < result2.length; i++) {
      console.log(result2[i].name);
  }
      
  
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  };
  connectClient();
  

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