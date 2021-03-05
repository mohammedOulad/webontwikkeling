function multiplyText(amount:number,text:string ="default",appendix:string = "!") {
    var legetext ="";
    var emptyString = " ";
    for (let index = 0; index < amount; index++) 
    {
        legetext = legetext+ emptyString + text;
    }
    return legetext + appendix;
}
console.log(multiplyText(3,"flower"));