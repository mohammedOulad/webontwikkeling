interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];
let starters:Pokemon[] = [...starterPokemonGen1,...starterPokemonGen2]
//console.log(starters)
let names:string[] = starters.map(names1=>names1.name)
//console.log(names)
let weakPokemon:Pokemon[] = starters.filter(weakPokemonXp=>{if(weakPokemonXp.xp<40)
 return console.log(weakPokemonXp)})

 let weakPokemonNames:string[] = starters
 .filter(weakPokemonXp=>weakPokemonXp.xp<40)
 .map(weakPokemonNames1=>weakPokemonNames1.name)
console.log(weakPokemonNames)

let sumOfAllXp = starters.reduce((sum, total) => sum + total.xp,0
);
console.log(sumOfAllXp);

let strongestPokemon = starters.reduce((sum,now,index,strongest)=> sum = strongest[1] && strongest[4]);
console.log(strongestPokemon)


let sumOfAllXpOfWeakPokemon = starters
.filter(weakPokemonXp=>weakPokemonXp.xp<40)
.reduce((sum,total)=>sum+total.xp,0)
console.log(sumOfAllXpOfWeakPokemon)

let sortedStarters = starters.sort((a,b) =>{
    if(a.xp>b.xp) return 1;
    if(a.xp<b.xp) return -1;
    return 0;
});
console.log(sortedStarters)
export {};