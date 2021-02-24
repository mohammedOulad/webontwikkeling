let getallen = new Array(100);
let uitprinten = getallen.length;
for (let i = 99; i < 200; i++)
    {  
        getallen[i] = i + 1; 
}
while(getallen.length <= 200)
    {console.log(getallen);
    break;
}
