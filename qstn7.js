//fetching array from the command line using 'process.argv'
function findLarge(num1,num2)       //function definition
{
        if(isNaN(Number(num1))||isNaN(Number(num2))) //if any input is NaN
        {
            if(isNaN(Number(num1))&&!(isNaN(Number(num2)))) //if 'num2' is number and 'num1' is NaN
            {
                console.log("Larger is:"+num2);
            }
            else if(isNaN(Number(num2))&&!(isNaN(Number(num1)))) //if 'num1' is number and 'num2' is NaN
            {
                console.log("Larger is:"+num1);
            }
            else                //if both are NaN
            {
                console.log("No Numbers Found.");
            }
        }
        else                //if both inputs are numbers
        {
            console.log("Larger Is:"+Math.max(num1,num2)); //built in "Math.max()" for getting larger
        }  
}       //function definition end
findLarge(process.argv[2],process.argv[3]); //function call; passing inputs from command line
                                                //using 'process.argv'