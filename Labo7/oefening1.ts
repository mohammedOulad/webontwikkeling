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
slowSum(1,5).then((result: number )=> {
    console.log(`1 + 5 = ${result}`)});

slowSum(1,5).then((result: number) => {
    slowMult(result,2).then((resultMult: Number) =>{
        console.log(`1 + 5 = ${result} en ${result} * 2 = ${resultMult}`)});
    })
});
export{};