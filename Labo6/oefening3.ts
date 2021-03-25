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
console.log(starters)
let names:string[] = starters.map(names1=>names1.name)
console.log(names)
export {};