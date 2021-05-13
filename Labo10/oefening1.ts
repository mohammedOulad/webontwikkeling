const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Droide123:Droide123@webontwikkelingcluster.b7i1j.mongodb.net/webontwikkelingcluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

interface MoviesData {
  name: string;
  myScore: number;
  timesViewed: number;
}

/*let movies : MoviesData[] = [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
];*/

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
        console.log(result2[i].myScore);}
        */

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
    console.log(result2[i].myScore);}
        */
    let cursor = await client.db("WebOntwikkeling").collection("Movies")
    .find({$or:[ {myScore: { $gte: 30, $lte: 85 } }, {timesViewed: 1 } ]});

    let result2 = await cursor.toArray();
    for (let i = 0; i < result2.length; i++) {
    console.log(result2[i].myScore);
}
    

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
connectClient();

export {};
