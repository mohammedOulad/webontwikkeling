const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://Droide123:Droide123@webontwikkelingcluster.b7i1j.mongodb.net/webontwikkelingcluster?retryWrites=true&w=majority";
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
        let cursor = await client.db('WebOntwikkeling').collection('Movies')
        .find({});
        let result2 = await cursor.toArray();
        console.log(result2[0]);
    
    }
    catch(e)
    {
        console.log(e);
    }
    finally{
        await client.close();
    }
};
connectClient();



export{};