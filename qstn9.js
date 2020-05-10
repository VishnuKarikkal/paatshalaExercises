let str = "Javascript";
let output='';
for(let i=0;i<str.length;i++)
{
    console.log('\n');
    output='';
    for(let j=0;j<=i;j++)
    {
        output+=str[j];
    }
    console.log(output);
}