// You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child","adult","senior"). Write a program which calculates the price accordingly and prints the total price to be paid to be paid. Let's assume the ticket price for a child is RS.100 adult ticket price is RS.150, and ticket price for a senior is RS.120

let child=100;
let adult=150;
let senior=120;
let numberOfChilds=2;
let numberOfAdults=1;
let numberOfSenior=1;
let result=numberOfChilds*child + numberOfAdults*adult + numberOfSenior*senior;
console.log("The total ticket price is " +result);