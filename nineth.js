// You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print "Found the first string" and its value.

const arr=[1,2,999,56,"Mithun",1234,"pw"];

for(let i=0;i<=arr.length;i++)
{
    if(typeof (arr[i])=="string")
    {
        console.log("The first string: " +arr[i]);
        break;
    }
}