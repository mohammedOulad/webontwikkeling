interface Calculation {
    (a:number, b:number):number
}
const optellen:Calculation = (a,b) => a+b;
const multi:Calculation = (a,b) => a*b;
const typeOfCal = (optellen:Calculation,multi:Calculation) => {
}

const printCalculationResult = (a:number,b:number,typeOfCal:Calculation) => {
    if(typeOfCal === optellen){
       console.log(a+b);
        }
        if(typeOfCal ===multi){
        console.log(a*b)
        }
        return -1;
}

printCalculationResult(2,4,optellen); //print 6
printCalculationResult(2,4,multi); // print 8


