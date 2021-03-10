interface Movie {
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean;
}
let thematrix: Movie = {
title: "The Matrix",
year: 1999,
actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
metascore: 73,
seen: true
}
let myfavoritemovie: Movie = {
title: "Pirates of the Caribbean",
year: 2007,
actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
metascore: 86,
seen: true
} 
let myworstmovie: Movie = {
    title: "American Pie",
    year: 1999,
    actors: ["Jason Biggs", "Seann William Scott", "Eddie Kaye Thomas"],
    metascore: 71,
    seen: true
} 
const wasMovieMadeInThe90s:Omschrijf90s = (movie) =>{
if (movie.year >= 1990 && movie.year <= 1999)
{
    return true;
}
else
{
    return false;
}
}
console.log(wasMovieMadeInThe90s(myfavoritemovie));
console.log(wasMovieMadeInThe90s(thematrix));
const averageMetaScore:OmschrijfMeta = (movies) =>{
    let totalMetaScore: number =0;
    for (let index = 0; index < movies.length; index++) {
        totalMetaScore += movies[index].metascore;
    }
return totalMetaScore / movies.length;
}
console.log(averageMetaScore([thematrix,myfavoritemovie,myworstmovie]));

const fakeMetaScore:OmscrhijfFake = (movie, newscore) =>{
    movie.metascore = newscore;
    return movie;
}
console.log(fakeMetaScore(myfavoritemovie,14));
console.log(fakeMetaScore(myworstmovie,15));
console.log(fakeMetaScore(thematrix,21));

interface Omschrijf90s{
    (movie: Movie ):boolean
}
interface OmschrijfMeta{
    (movies: Movie[]):number
}
interface OmscrhijfFake{
    (movie: Movie, newscore: number):Movie
}
