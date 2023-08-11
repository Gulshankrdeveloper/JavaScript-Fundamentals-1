// You are developing a form validation system. Write a program that takes user information (such as name, email,age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string", "email should a string", and "age should be a number" if any field is not proper

let name="Gulshan";
let email="gulshankr@gmail.com";
let age="18";

if(typeof age=="number")
{
    console.log("everything is right");
}
else
{
    console.log("Age should be a number");
}