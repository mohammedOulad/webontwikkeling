interface Person {
    name: string,
    age: number
}
interface ZoekPersonenMetLeeftijd {
    (personen: Person[], leeftijd: number)
}
let personen: Person[] = [
    {
        name: 'Andie',
        age: 36
    },
    {
        name: 'Donald',
        age: 76
    },
    {
        name: 'Joe',
        age: 78
    },
    {
        name: 'Bompa',
        age: 75
    },
]
const zoekPersonenMetLeeftijd : ZoekPersonenMetLeeftijd = (persoon,leeftijd) => {
    let personenMetLeeftijd = [];
    for (let index = 0; index < personen.length; index++) {
        
        if (personen[index].age === leeftijd) {
            
        }
        return personenMetLeeftijd
    }
}
console.log(zoekPersonenMetLeeftijd(personen,36));
export{};
