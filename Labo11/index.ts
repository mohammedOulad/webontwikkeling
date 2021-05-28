const { MongoClient, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://Droide123:Droide123@webontwikkelingcluster.b7i1j.mongodb.net/webontwikkelingcluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json({ limit: "1mb" }));
//app.use(express.urlencoded({ extended:true}))  //inclde header enzo...
app.set("port", 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));

interface MovieData {
  name: string;
  myScore: number;
  ranking: number;
}

let movie: MovieData[] = [];

// let Movies = [
//   { name: "Classroom of the elite", myScore: 90, ranking: 3 },
//   { name: "Solo Leveling", myScore: 100, ranking: 1 },
//   { name: "Beginning after the end", myScore: 99, ranking: 2 },
//   { name: "Darwin's game", myScore: 85, ranking: 4 },
// ];

const connectClient = async () => {
  try {
    await client.connect();
    // await client.db("WebOntwikkeling").collection("Movies").deleteMany({});
    // await client.db("WebOntwikkeling").collection("Movies").insertMany(Movies);
    movie = await client.db("WebOntwikkeling").collection("Movies").find({}).toArray();
    console.log(movie)
  } catch (e) {
    console.log(e);
  }
};
connectClient();

const getMovies = async () => {
  try {
    await client.connect();
    movie = await client.db("WebOntwikkeling").collection("Movies").find({}).toArray();
    console.log(movie);
    return movie;
  } catch (e) {
    console.log(e);
  }
  finally {
    await client.close();
  }
};

const removeMovies = async (name: string) => {
  try {
    await client.connect();
    await client.db("WebOntwikkeling").collection("Movies").deleteOne({ "name": name });
  } catch (error) {
    console.log(error)
  }
};
app.get("/", (req: any, res: any) => {
  res.type("text/html");
  res.render("landingpage");
});

app.get("/movies/:id", async (req: any, res: any) => {
  let id = req.params.id;
  console.log(id);
  res.render("movie", { name: movie[id].name, myScore: movie[id].myScore, ranking: movie[id].ranking });
});

app.get("/movies", async (req: any, res: any) => {
  let movie = await getMovies();
  res.render("movies", { movies: movie });
});

app.get("/addMovie", async (req: any, res: any) => {
  res.render("addMovie");
});

app.post('/addMovie', async (req: any, res: any) => {
  let name = req.body.name;
  let myScore = req.body.myScore;
  let ranking = req.body.ranking;
  let movie: MovieData = { name: name, myScore: myScore, ranking: ranking }
  try {
    await client.connect();
    await client.db("WebOntwikkeling").collection("Movies").insertOne(movie);
  } catch (err) {
    console.log(err)
  }
  finally {
    await client.close();
  }
  res.redirect("/movies")
})

app.get("/removeMovie/:name", async (req: any, res: any) => {
  let name = req.params.name;
  console.log(name);
  await removeMovies(name)
  res.redirect("/movies");
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);
export { };
