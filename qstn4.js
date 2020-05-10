//fetching array from the command line using 'process.argv'
function sumOfSquares(array)
{
    let sum=0;
    let arr='';
    let sqr='';
    console.log("The Array Elements are:")
    for(let i=2;i<array.length;i++)
    {
    arr+=array[i]+' ';
    if(!(isNaN(Number(array[i]))))
    {
        sqr+=(array[i]*array[i])+' ';
        sum+=(array[i]*array[i]);
    } 
    }
    console.log(arr);
    console.log("Squares Found are:")
    console.log(sqr);
    console.log("Sum Is:"+sum);
}
sumOfSquares(process.argv);