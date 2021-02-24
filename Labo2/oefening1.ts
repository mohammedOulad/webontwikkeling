let getallen = new Array();

for (let i = 0; i < 100; i++)
    {  
        let teller = 100 +(i+1);
        getallen[i] = teller; 
        
    }
    while(getallen.length <= 100)
    {
        console.log(getallen);
        break;
    }
for (let i = 0; i < 100; i++)
{
    if (getallen[i] % 2 === 0)
    {
    console.log(getallen[i]);
    }
}   