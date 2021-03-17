/*interface ResultHandler {
    (output:number):void
}*/
    
const sum = (output: Array<number>) => {
    let optelling : number = 1;
    for (let i = 0;i < output.length; i++)
    optelling = optelling * output[i];
    printToConsole (output);
};


const printToConsole = (number : Array<number>)  => 
console.log(`the result is ${number}`); 
sum([2+2+2]);







