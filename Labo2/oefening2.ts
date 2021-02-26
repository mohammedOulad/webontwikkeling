enum kleur
{
Red, Orange, Yellow, Green, Blue, Indigo, Violet
}
let legearray = new Array(kleur);
/*for (let index = 0; index < legearray.length; index++)
{
    legearray[index] 
}
while(legearray.length <= 6)
{
    console.log(legearray);
    break;
}*/

for (let index = 6; index > legearray.length ; index--)
{
    legearray[index] 
}
while(legearray.length)
{
    console.log(legearray);
    break;
}