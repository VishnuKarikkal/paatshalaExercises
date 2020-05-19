var studentList=[];                     //array to hold objects
function studentData(name,classNo,roll)     //object constructor function
{
    this.name=name;
    this.classNo=classNo;
    this.roll=roll;
}

function createData()       //for creating objects
{
    let studName=document.getElementById("name").value;     //accessing input values
    studName=studName.toLowerCase();    //'name' to toLowerCase
    let studClass=document.getElementById("class").value;
    let studRoll=document.getElementById("roll").value;  
    document.getElementById("submitStatus").textContent=''; //resetting submission status
    for(let i=0;i<studentList.length;i++)       //checking for duplicate submission
    {
        if((studentList[i].name==studName)&&(studentList[i].classNo==studClass)&&(studentList[i].roll==studRoll))
        {                       //duplicate submission found
            document.getElementById("submitStatus").style.color="red";  //resetting submission status
            document.getElementById("submitStatus").textContent="Already Created Data Of Above Student";
            return;             //aborting duplicate submission
        }
        else if((studentList[i].classNo==studClass)&&(studentList[i].roll==studRoll))
        {                   //check for duplicate roll number in same class
            document.getElementById("submitStatus").style.color="red";  //resetting submission status
            document.getElementById("submitStatus").textContent="Check for Correct Roll Number or Class.(Note:No 2 Student of A Class can have Same Roll Number.)";
            return;         //aborting
        }
    }       //no duplicate submissions found
    let student=new studentData(studName,studClass,studRoll); //creating new object
    studentList.push(student);                  //pushing object into the array
    document.getElementById("submitStatus").style.color='green';   //resetting submission status
    document.getElementById("submitStatus").textContent='Student Data Created Successfully';
}   //function end

function sortData()         //for sorting objects
{
    let table;
    let studData;
    if(studentList.length==0)       //check for empty objects
    {
        document.getElementById("sortStatus").textContent="No Data Found";
        document.getElementById("sortStatus").style.color='red';
        return;             //aborting on empty data
    }    
    for(let i=0;i<studentList.length;i++)     //sorting data
    {
        let j=i+1;
        while(j<studentList.length)
        {
            if(studentList[i].name>studentList[j].name) //based on name
            {
                studData=studentList[i];
                studentList[i]=studentList[j];
                studentList[j]=studData;     
            }
            else if(studentList[i].name==studentList[j].name)
            {
                if(studentList[i].roll>studentList[j].roll)     //based on roll number
                {
                    studData=studentList[i];
                    studentList[i]=studentList[j];
                    studentList[j]=studData;
                }
                else if(studentList[i].roll==studentList[j].roll)
                {
                        if(studentList[i].classNo>studentList[j].classNo)   //based on class
                    {
                        studData=studentList[i];
                        studentList[i]=studentList[j];
                        studentList[j]=studData;
                    }
                }
            }
            j++;
        }      
    }
            //setting table header
    table="<tr align=center><th>Serial No.</th><th>Name</th><th>Roll Number</th><th>Class</th></tr>";
                                    // for(let i=0;i<studentList.length;i++)   //setting table rows with object data
                                    // {
                                    //     table += "<tr align=center><td>" +
                                    //     (i+1) +
                                    //     "</td><td>" +
                                    //     studentList[i].name.toUpperCase() +     //'name' in uppercase 
                                    //     "</td><td>" +
                                    //     studentList[i].roll + " " +
                                    //     "</td><td>" +
                                    //     studentList[i].classNo   +
                                    //     "</td></tr>";
                                    // }
    let i=1;
    for(obj in studentList)         //for...in loop
    {
        table += "<tr align=center><td>" +  //setting table rows with object data
        (i) +
        "</td><td>" +
        studentList[obj].name.toUpperCase() +     //'name' in uppercase 
        "</td><td>" +
        studentList[obj].roll + " " +
        "</td><td>" +
        studentList[obj].classNo   +
        "</td></tr>";
    }
    document.getElementById("sortStatus").textContent="Sorted!";
    document.getElementById("sortStatus").style.color='green';
    document.getElementById("sortData").innerHTML = table; //adding created table rows to the html page
    document.getElementById("sortData").scrollIntoView();
}   //function end