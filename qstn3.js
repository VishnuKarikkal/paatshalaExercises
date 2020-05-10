function swapCase()
{
    let stringInput=document.getElementsByTagName("input"); //accessing inputbox
    stringInput=stringInput[0].value;                       //getting input string
    document.getElementsByTagName('label')[1].hidden=true;
    document.getElementById('result').textContent="";       //resetting result label
    if(stringInput=='')     //if no input given
    {
        document.getElementById('result').textContent="Enter a String in the Above Field"; 
        return;             //breaking function execution
    } 
    document.getElementsByTagName('label')[1].hidden=false;
    for(let i=0;i<stringInput.length;i++)            //swapping string letters' case; one by one
    {
        if((stringInput.charCodeAt(i)>=65)&&(stringInput.charCodeAt(i)<=90))   //65-90:Uppercase
        {
            document.getElementById("result").textContent+=stringInput.charAt(i).toLowerCase();
        }
        else if((stringInput.charCodeAt(i)>=97)&&(stringInput.charCodeAt(i)<=122))//97-122:Lowercase
        {
            document.getElementById("result").textContent+=stringInput.charAt(i).toUpperCase();
        }
        else        //if not case swappable
        {
            document.getElementById("result").textContent+=stringInput.charAt(i);
        }
    }
}