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

    //await client.db('WebOntwikkeling').collection('Movies').insertMany(movies); insert many movies in mongodb

    // let result = await client.db('WebOntwikkeling').collection('Movies').findOne({});
    // console.log(result); toont de eerste film in de db
    /* let cursor = await client.db("WebOntwikkeling").collection("Movies").find({});
    let result2 = await cursor.toArray();
    for (let i = 0; i < result2.length; i++) {
        console.log(result2[i].myScore);
        }*/ //toont een lijst van alle scores van alle films

    let cursor = await client
      .db("WebOntwikkeling")
      .collection("Movies")
      .find({});
    let result2 = await cursor.toArray();
    for (let i = 0; i < result2.length; i++) {
        let somTimesViewed =+ result2[i].timesViewed
      console.log(somTimesViewed);
    }


  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
connectClient();

export {};

interface Coin {
  name: string;
  value: number;
}
const coins: Coin[] = [
  { name: "DOGE", value: 0.42 },
  { name: "BTC", value: 43000 },
  { name: "ELONGATE", value: 0.000005 },
];
(async () => {
  try {
    await client.connect();
    let list = await client.db().admin().listDatabases();
    console.log(list);
    await client.db("Demo").collection("Coins").deleteMany({});
    await client
      .db("Demo")
      .collection("Coins")
      .insertOne({ name: "SAFEMOON", value: 0.00004 });
    await client.db("Demo").collection("Coins").insertMany(coins);
    let result: Coin[] = await client
      .db("Demo")
      .collection("Coins")
      .find({})
      .toArray();
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name);
    }
    console.log("-------");
    let result2: Coin = await client.db("Demo").collection("Coins").findOne({});
    console.log(result2.name);
    console.log("-------");
    let result3: Coin[] = await client
      .db("Demo")
      .collection("Coins")
      .find({ value: { $gt: 30, $lt: 85 } })
      .toArray();
    for (let i = 0; i < result3.length; i++) {
      console.log(result3[i].name);
    }
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
})();
