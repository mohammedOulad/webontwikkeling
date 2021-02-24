let veelvouden = new Array();

for (let i = 0; i < 70; i++)
{   
        veelvouden[i] = i+1;
        if (veelvouden[i] % 7 === 0)
    {
        console.log(veelvouden[i]);
    }
}
/*for (let i = 0; i < 70; i++)
{   
        veelvouden[i] = i+1;
        if ((veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0) && !(veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0))
    {
        console.log(veelvouden[i]);
    }
}*/
for (let i = 0; i < 70; i++)
{   
    veelvouden[i] = (veelvouden[i] = i+1)
    let result = veelvouden[i];
    result =  ((veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0) && !(veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0)) 
    console.log(result);
}