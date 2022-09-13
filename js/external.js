"use strict";

console.log(`hello from exeternal.js JavaScript`)

alert(" Welcome to my Website!")

let favColor = prompt("What is your favorite color?")

alert("Great, " + favColor + " is my favorite too!")

//rental movies

let littlemermaid = prompt("How many days did you rented The little mermaid for?")

let brotherbear = prompt("How many days did you rented Brother bear for?")

let hercules = prompt("How many days did you rented Hercules for?")

let price = 3

alert("Your totall price is  $" + (littlemermaid * price + brotherbear * price + hercules * price))

//Contactor work

let google = prompt("How much did Google pay you per hour?")
let googletime = prompt( "How long did you worked for Google?")

let amazon = prompt("How much did Amazon pay you per hour?")
let amazontime = prompt( "How long did you worked for Amazon?")

let facebook = prompt("How much did Facebook pay you per hour?")
let facebooktime = prompt( "How long did you worked for Facebook?")

alert("Your weekly earnings are $" + (google * googletime + amazon * amazontime+ facebook * facebooktime))

//Student enrollment

let isclassfull = confirm("Is the class not full?");

let schedule = confirm("Do you have time for class?");

alert("you can enroll: " + (isclassfull && schedule))

//Promotion for product

let premium = confirm("Are you a premium member?")

let items = confirm("Are you buying more than two items?")

let offer = confirm("Has the offer expired")

let offerApplied = (items || premium) && !offer;

alert("Can the offer be applied?" + offerApplied)

//function name exercise
let firstName = prompt("Whats your first name?")
let lastName =prompt("Whats your last name?")

function fullName(a, b){
    let firstLast = (a, b)
    return firstLast
}

console.log(fullName(firstName + lastName));
