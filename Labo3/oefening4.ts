const color = require('chalk');

enum kleuren {red = color.red, green = color.green,blue = color.blue};


function multiplyTextColor(amount:number,kleuren,text:string ="default",appendix:string = "!") {
    var legetext ="";
    var emptyString = " ";
    for (let index = 0; index < amount; index++) 
    {
        legetext = legetext+ emptyString + text;
    }
    return legetext + appendix;
}
console.log(color.red(multiplyTextColor(3,color.red,"flower")));