interface printStuff  {
    element1: string,
    element2: string;
}
interface twoDArray  {
    element1: string,
    element2: string;
}
interface numberToString  {
    number: number;
}


const printStuff = (amount: number, text: string):void => {
    console.log(`Hello ${text}, you are number ${amount}`);
}
const twoDArray = (element1: string, element2: string): string[] => {
    return [element1, element2];
}
const numberToString = (number: number): string => {
    return `${number}`;
}