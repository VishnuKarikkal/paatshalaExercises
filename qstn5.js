console.log("Looping From 0 to 15.\n");
for(let i=0;i<=15;i++)
{
    if(i>0)
    {
        (i%2==0)?console.log(`The Number ${i} is Even.`):console.log(`The Number ${i} is Odd.`);
    }
    else
    {
        console.log(`The Number ${i} is Neither Odd Nor Even.`);
    }
}