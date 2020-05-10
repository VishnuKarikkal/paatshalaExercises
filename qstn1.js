//fetching array from command line using 'process.argv'
function primeOrNot(array)
{  
    firstElement =Number(array[2]);
    console.log(firstElement);  
    let i=2;
    do
    {
        if(firstElement%i == 0)
        {
            console.log("Not Prime \n");
            break;
        }
        i++;
    }while(i<=Math.sqrt(firstElement))

    if((i>Math.sqrt(firstElement))&& (firstElement!=1) )   //checking whether nature of number found
    {                   //if i>sqrt(num) then surely num is prime
        console.log("Prime \n");
    }
    else
    {           // if num is 1
        console.log("1 is Not Prime");
    }
}

primeOrNot(process.argv);       //function call