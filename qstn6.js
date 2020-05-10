function checkStringTruncate()
{
    let stringHolder;       //variable to hold string values temporarily
    let strInput=document.getElementById("string").value;   //accessing the string input 
    document.getElementById("stringStatus").style.color='black';
    if(strInput.length>20)          //if input string length exceeded the limit(20)
    {
        document.getElementById("stringStatus").hidden=false;
        stringHolder=strInput.substring(0,20);  //fetches substring of '20 chars length' from 'index 0'
        document.getElementById("string").value=stringHolder;
        stringHolder=strInput.slice(20); //slices specified number of characters from beginning
        document.getElementById("stringStatus").innerHTML=`Truncated -<span style="color:red">${stringHolder}</span>-`;
        document.getElementsByTagName("label")[4].style.color='red';
    }
    else    //if input string length is below the limit
    {
       if(strInput.length==0)       //if no string entered
       {
        document.getElementById("stringStatus").textContent="No String Entered.";
        document.getElementById("stringStatus").hidden=false;
        document.getElementsByTagName("label")[4].style.color='black';
        document.getElementById("stringStatus").style.color='yellow';
       }
       else             //if length is 20
       {
        document.getElementById("stringStatus").hidden=false;
        document.getElementById("stringStatus").textContent="No Truncation.";
        document.getElementsByTagName("label")[4].style.color='green';
       }
                            
    }
}