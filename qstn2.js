function FindMostFreqItem(array)
{
    let freqCounterArray = [];      //array for binding ITEM and its FREQUENCY
    let mostFreqItem;               //to store the Most Frequent Item
    let freqOfItem=0;               //to store frequency of each item
    let flag=0;                     //to check multiple frequent items are available;'1' means multiple frequent items
    let multipleFreq=0;             //to store frequency of mutliple frequent items

    freqCounterArray[0]=0,freqCounterArray[1]=0;
    for(let i=2;i<array.length;i++)         //obtaining the Frequency array
    {
    freqOfItem=1;
        for(let j=i+1;j<array.length;j++)
        { 
            if(array[i]==array[j])
            {
                freqOfItem++;
            }
        }  
        freqCounterArray[i]=freqOfItem;    
    } 
// console.log(freqCounterArray);
    freqOfItem=freqCounterArray[2]; //for making a decision to select frequent item, 'freqOfItem' is reused for another purpose
    mostFreqItem=array[2];          //assuming 'item1' as most frequent
    multipleFreq=0;                 //assuming only one frequent item is available
       for(let i=3;i<array.length;i++)
       {
        if(freqCounterArray[i]>freqOfItem) //finding most frequent item
        {
        mostFreqItem=array[i];
        freqOfItem=freqCounterArray[i];
            if(multipleFreq<freqOfItem)  //resetting flag
            {flag=0;}
        }
        else if(freqCounterArray[i]==freqOfItem) //checking whether multiple frequent items are available
        {
            multipleFreq=freqOfItem;        //frequency of muliple frequent items
            flag=1;                         //shows multiple frequent Items available
        }
       }
       if(flag==1) 
       {
           console.log("multiple frequent items.");
       }
       else
       {
           console.log("Most Frequent Item Is:"+mostFreqItem+" with Frequency of:"+freqOfItem);
       }
}

FindMostFreqItem(process.argv);             //function call