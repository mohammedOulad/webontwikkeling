const { MongoClient } = require("mongodb");
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
let Movies = [
  { name: "Classroom of the elite", myScore: 90, ranking: 3 },
  { name: "Solo Leveling", myScore: 100, ranking: 1 },
  { name: "Beginning after the end", myScore: 99, ranking: 2 },
  { name: "Darwin's game", myScore: 85, ranking: 4 },
];

const connectClient = async () => {
  try {
    await client.connect();
    await client.db("WebOntwikkeling").collection("Movies").deleteMany({});
    await client.db("WebOntwikkeling").collection("Movies").insertMany(Movies);
    console.log(Movies)
  } catch (e) {
    console.log(e);
  }
};
connectClient();

const getMovies = async () => {
  try {
    let movies: MovieData[] = await client.db("WebOntwikkeling").collection("Movies").find({}).toArray();
    console.log(movies);
    return movies;
  } catch (e) {
    console.log(e);
  }
};

const getMoviesId = async (id: string) => {
  try {
    let movie: MovieData = await client.db("WebOntwikkeling").collection("Movies").findOne({ _id: Object(id) });
    console.log(movie);
    return movie;
  } catch (e) {
    console.log(e);
  }
};

const addMovie = async () => {
  try {
    let movie: MovieData = await client.db("WebOntwikkeling").collection("Movies").insertOne(Movies);
    console.log(movie)
    return movie;
  } catch (e) {
    console.log(e);
  }
};

const removeMoviesById = async (id: string) => {
  try {
    let movie: MovieData = await client.db("WebOntwikkeling").collection("Movies").findOne({ _id: Object(id) });
    console.log(movie);
    return movie;
  } catch (e) {
    console.log(e);
  }
};

app.get("/removeMovie/:id", async (req: any, res: any) => {
  let id: string = req.params.id;
  await removeMoviesById(id);
  let movies: MovieData[] | undefined = await getMovies();
  res.render("movies", { movies: movies });
});

app.get("/addMovie", async (req: any, res: any) => {
  let movie: MovieData | undefined = await addMovie();
  //let movie: MovieData | undefined = await addMovie(id);
   res.render("addMovie", { movies: movie });
});

app.post('/addMovie', async (req:any, res:any)=>{
  let movie: MovieData | undefined = await addMovie();
  res.render('addMovie',({name: req.body.title,myScore: req.body.score,ranking: req.body.ranking}))
})

app.get("/movies/:id", async (req: any, res: any) => {
  let id: string = req.params.id;
  let movie: MovieData | undefined = await getMoviesId(id);
  console.log(id);
  res.render("movie", { movies: movie });
});

app.get("/movies", async (req: any, res: any) => {
  let Movies: MovieData[] | undefined = await getMovies();
  res.render("movies", { movies: Movies });
});

app.get("/", (req: any, res: any) => {
  res.type("text/html");
  res.render("landingpage");
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);
export { };
