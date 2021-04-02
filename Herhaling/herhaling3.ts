import chalk from 'chalk';
interface Person {
    name: string,
    age: number
}

interface PrintAllePersonen {
    (personen: Person[], printPersoon:PrintPersoon):void
}
interface PrintPersoon {
    (persoon: Person) : void
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
/*
const printNaamDanLeeftijd : PrintPersoon = (persoon) => {
    console.log(` $(personen.age) ${persoon.name}`)
}

 const printAllePersonen: PrintAllePersonen = (personen)=> {
     for (let index = 0; index < personen.length; index++) {
         console.log(` ${personen[index].name} ${personen[index].age}` )
     }
 }
 const printAllePersonen2: PrintAllePersonen = (personen)=> {
    for (let index = 0; index < personen.length; index++) {
        console.log(` ${personen[index].age} ${personen[index].name}` )
    }
}
const printAllePersonen3: PrintAllePersonen = (personen)=> {
    for (let index = 0; index < personen.length; index++) {
        if (personen[index].age > 70) {
            console.log(` ${personen[index].age} ${personen[index].name}` )
        }
        else{
            console.log()
        }
    }
}
const printMetKleur : PrintPersoon = (persoon) => {
    if(persoon.age > 70)
    {
        console.log(` ${persoon.age} ${persoon.name}` )
    }
}*/
const printAllePersonen : PrintAllePersonen = (personen, printPersoon) => {
    for (let index = 0; index < personen.length; index++) {
        printPersoon(personen[index]);
    }
}

printAllePersonen(personen, (persoon) => {
    console.log(`${chalk.green(persoon.name)} ${chalk.red(persoon.age)}`);
});
export{};