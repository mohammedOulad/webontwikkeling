interface printStuff  {
    (amount:number,text:string):void
};
let add: printStuff = (amount,text) => {return amount + text};

interface twoDArray  {
    (element1: string,element2: string):string[]
};
let addoef1: twoDArray = (Element1,Element2) => [Element1 + Element2];

interface numberToString  {
    (number: number):number
};
let double: numberToString = (number) => number;


const printStuff = (amount: number, text: string):void => {
    console.log(`Hello ${text}, you are number ${amount}`);
}
const twoDArray = (element1: string, element2: string): string[] => {
    return [element1, element2];
}
const numberToString = (number: number): string => {
    return `${number}`;
}

printStuff(2,"corsair")