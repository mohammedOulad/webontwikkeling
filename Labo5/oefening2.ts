interface ResultHandler {
    (number:number[])
}
    
const sum = (output: Array<number>,Kleiner:ResultHandler, Groter:ResultHandler) => {
    let optelling : number = 1;
    for (let i = 0;i < output.length; i++)
    optelling = optelling * output[i];

    if(optelling >= 10)
    {
        Groter (output);
    }
    else {
        Kleiner(output)
    }
};
const KleinerDan10:ResultHandler = number => console.log(`the result ${number} is a very small number`)
const GroterDan10: ResultHandler = number => console.log(`the result is ${number}`); 
const printToConsole = (number : Array<number>)  => 
console.log(`the result is ${number}`);

sum([2,2,2],KleinerDan10,GroterDan10);
sum([2,2,6],KleinerDan10,GroterDan10);
sum([2,2,2],GroterDan10,KleinerDan10);






