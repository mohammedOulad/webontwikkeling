let getallen = new Array(100);
for (let i = 99; i < 200; i++)
    {  
        getallen[i] = i + 1; 
    }
while(getallen.length <= 200)
    {
        console.log(getallen);
        break;
    }
    for (let i = 99; i < 200; i++)
    {  
        if(getallen[i] % 2 ==0)
        getallen[i] = i + 1; 
    }