//You are building a shipping applications. Write a program that takes the type of package ("standard" "express","overnight") adn uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might takes 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

let package="express";
switch(package)
{
    case "standard":
        console.log("It might takes 3-5 days");
        break;

    case "express":
        console.log("It might takes 1-2 days");    
        break;

    case "overnight":
        console.log("It would be delivered next day");    
        break;

    default:
        console.log("Invalid package");    
}