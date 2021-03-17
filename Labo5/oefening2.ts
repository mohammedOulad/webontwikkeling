interface ResultHandler {
    (number:number[])
}
    
const sum = (output: Array<number>,GroteDan10:ResultHandler) => {
    let optelling : number = 1;
    for (let i = 0;i < output.length; i++)
    optelling = optelling * output[i];

    if(optelling >= 10)
    {
        GroteDan10(output)
    }
    else{
        printToConsole (output);
    }
};
const GroteDan10:ResultHandler = number => console.log(`the result ${number} is a very small number`)

const printToConsole = (number : Array<number>)  => 
console.log(`the result is ${number}`); 
sum([2+2+2],GroteDan10);






