let name='I;am;Iron;Man';
//split=> character 
let strArray = name.split('n');
console.log(strArray);
let biggest = 0;
for(let i=0;i<strArray.length;i++)
{
    if(strArray[i].length>biggest)
    {
        biggest=strArray[i].length;
    }


}
console.log(biggest);
