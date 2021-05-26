const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Droide123:Droide123@webontwikkelingcluster.b7i1j.mongodb.net/webontwikkelingcluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const express = require("express");
const app = express();
const ejs = require("ejs");
const fetch = require("node-fetch");
app.use(express.json({ limit: "1mb" }));
//app.use(express.urlencoded({ extended:true}))  //inclde header enzo...
app.set("port", 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));

interface MoviesData {
  name: string;
  myScore: number;
  ranking: number;
}

let movieData: MoviesData[] = [];


const connectClient = async () => {
  try {
    await client.connect();
    movieData = await client
      .db("WebOntwikkeling")
      .collection("Movies")
      .find({})
      .toArray();
    
    for (let i = 0; i < movieData.length; i++) {
      console.log(
        movieData[i].name,
        movieData[i].myScore,
        movieData[i].ranking
      );


      movieData = await client
            .db("WebOntwikkeling")
            .collection("Movies")
            .deleteOne();
    }

  } 
  catch (e) {
    console.log(e);
  } 
  finally {
    await client.close();
  }
};
connectClient();

app.get("/movies/:id", (req: any, res: any) => {
  let id = req.params.id;
  console.log(id);
  res.render("movie", {
    naam: movieData[id].name,
    score: movieData[id].myScore,
    ranking: movieData[id].ranking
  });
});

app.get("/movies", (req: any, res: any) => {
  res.render("movies", { movies: movieData });
});

app.get("/", (req: any, res: any) => {
  res.type("text/html");
  res.render("landingpage");
});

app.get("/addMovie", (req: any, res: any) => {
  res.render("addMovie");
});
app.get("/removeMovie", (req: any, res: any) => {
    res.render("removeMovie");
  });

app.post("/addMovie", (req: any, res: any) => {
  res.render("addMovie");
  movieData.push({ name: req.body.title, myScore: req.body.score, ranking: req.body.score });
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);

export {};
