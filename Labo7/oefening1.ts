const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}
const slowDiv = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        
        
        if((a/b) != 0)
        {
        setTimeout(() => {
            resolve(a/b);
        },2000)
    }
        else{
            reject("You cannot divide by zero")
        }
    });
}


slowDiv(6,3).then((resultDiv:number )=> {
    console.log(`6 / 3 = ${resultDiv}`)})
    .catch(err =>{
        console.error(err);
    });
    
slowDiv(6,0).then((resultDiv:number )=> {
        console.log(`6 / 0 = ${resultDiv}`)})
        .catch(err =>{
            console.error(err);
        });
    

slowSum(1,5).then((result: number )=> {
    console.log(`1 + 5 = ${result}`)});

    slowSum(1,5).then((result: number) => {
        slowMult(result,2).then((resultMult: Number) =>{
            console.log(`1 + 5 = ${result} * 2 = ${resultMult}`)});
        });


export{};