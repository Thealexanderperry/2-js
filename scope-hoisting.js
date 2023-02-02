// ? Scope & hoisting

/* 
    Scope is used to determine how information in different blocks of code can be accessed.

    Five types of scope:
    * Global/window
    * Block
    * Function
    * Module
    * Lexical
*/

// ? Global Scope

/* 
    * Outermost scope
    * Window object when in client
    * js file when in node
    * accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"


// ? Function Scope

/* 
    * Accessible only inside of the function
*/

function scope() {
    let fsxv = "This is a fx scope variable"
    console.log(fsxv)
    console.log(globalScopeVar);
}

scope();

// ? block scope

/* 
    * Can be anywhere there are
    * Can be put anywhere
*/

{
    let bsv = "Block Scope Variable."
    console.log(bsv)
}

// Console.log(bsv) // Reference Error

// ? Lexical Scope

/* 
    * Variables are accessable by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer scope
    let ofxv = "Outer fx Scope variable"

    function innerFX() {
        //inner scope
        let ifxv = "Inner fx scope variable"
        console.log(ofxv)
        return ifxv
    }

    return innerFX()
}

console.log(outerFx())

// ? module scope

/* 
    * Encapsulates objects inside other objects or files
    * Allows the use in other files
*/

const states = require("./states")

console.log(states)


// FizzBuzz Challenge!
/*
    Create a function that takes a parameters called start and stop.
    Loop over numbers from start to stop
    If the number is divisible by 3, print "Fizz"
    If the number is divisible by 5, print "Buzz"
    If the number is divisible by 3 and 5, print "Fizz Buzz"
    If the number is not divisible, print the number only
    Invoke your function to make sure it works.
*/


function FizzBuzz(start, stop) {
    for (i = start; i <= stop; i++) {
        i % 3 == 0 && start % 5 == 0 ? "Fizz Buzz"
        : i % 3 == 0 ? console.log("Fizz")
        : i % 5 == 0 ? console.log("Buzz")
        : console.log(i)
    }
}

console.log(FizzBuzz(0 , 100))


// ? Hoisting

/* 
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice.
        * First, it looks for VARiables and fx declarations & hoists them
        * It allocates memory space to those declarations
        * Then it executes the code line-by-line
*/

// console.log(myName) // Reference Error: cannot access before initilization
let myName = "Alex Perry"
console.log(myName)

console.log(isTeacher) // Returns undefined
var isTeacher = true
// console.log(isTeacher)

// ? Function Declarations ARE hoisted

displayName("Django")

function displayName(str) {
    console.log(`Hello, ${str}`)
}

displayName("Mortyyyyy")

console.log(returnName("Rick Sanchez"))

function returnName(name) {
    return capitalize(name)
}

function capitalize(str) {
    return str.toUpperCase()
}

// ? Function Expressions are NOT hoisted

// console.log(returnNameExpression("Tyler")) // Reference Error

let returnNameExpression = function(name) {
    return capitalizeExpression(name)
}

// console.log(returnNameExpression("Paul")) // Reference Error

let capitalizeExpression = function(str) {
    return str.toUpperCase()
}

console.log(returnNameExpression("Alex"))