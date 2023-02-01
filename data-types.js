// ? Javascript

/* 
    JS was founded in 1996  by Brandon Eich
    * client-side language )(runs in the browser)
    * interpreted language, not compiled
    * first-class function - functions are treated like and other 
        variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organiztion setting language standards
*/

//  ? Comments

/* 
    * Blocks of code that are not being interpreted
    * Denoted by // for single-line
    * Denoted by /* got multi-line
    * Comments are read but not executed
    * As student, it helps us with note taking
    * As devs, it documents our code making it more maintainable
 */

// ? Console Object

/* 
    * Give us access to the browser or node's debugging console.
    * Allows developer to view output from their program
*/

console.log(2 + 2)// shows in node
2+2 //runs but doesnt show in the console

// ? Data Types


// ? JS Data Types
/* 
    Primative
        * String
        * Number
        * boolean
        * null
        * undefined
        * Not a Number (NaN)
    reference
        *
*/

// ? Strings

/* 
    * Primitive data type representing characters (text)
    *Enclosed ' ', " ", or ` `

    Example
    */

    console.log("This is a text")
    console.log('This is also a text')
    console.log(`Text using string interpolation backticks`)

    // This is also a string representation of a number
    console.log("2023")


    // We can add (concatenate) strings
    console.log("I'm Alex " + "and im 30")

    // Strings are indexed starting from (0)
    // index_value goes between []
    // ! Strings are immutable
    console.log("porschedoppelkupplongsgetreibe"[5])

    /* 
    ? String Interpolation
    A process of incluing space for expression 
    */

    // TODO: we'll get to it later

    console.log(`My Name is Alex and I am ${"a Monkey"}`)

    /* 
    
    ? string methods
    .length
    .slice()
    .toUpperCase()
    .toLowerCase()
    */

    console.log("------------")
    console.log("Perry".length)
    console.log("Perry".toUpperCase)
    console.log("Perry".slice(0,4))

/* 
    ? Checking Data types using operator
*/

    console.log(typeof 1990) // returns string

// Multi-line strings
// Done using escape character "\n"

console.log("Alex Perry \n 123 main st \n 802 505 5336")


// ? Numbers

/* 
    Any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(typeof 1776)
console.log(0.2 + 0.1) // returns 0.300...04


// ? Booleans

/* 
    * Binary Value
    * Either true (on) or false (off)
    * Examples of falsey values:
        * 0
        * null
        * undefined
        * NaN
*/

console.log(true)
console.log(false)
console.log(2 == 2) // returns true
console.log(2 == 5) // returns false
//boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) //false
console.log(Boolean("")) //false


// ? Type Coercion

/* 
    * JavaScript is a weakly-typed programming language
    * Doesn't require data type definition
    * Comparison operator (==) performs type coercion before resolving exprssion
    * We can use strict equality (===) to avoid type coercion
*/

// Type Coercion of number to string and string concatenation
console.log(2 == "2") // returns true ("22")
//
console.log(2 === "2") // returns false


// ! know what type coercion is but DON'T USE IT!

// ? Null and Undefined

/* 
    * Null - explains the lack of exisence (Nothing)
    * Undefined - explains the lack of value 
*/

// ? Operators


/* 
    * Addition (+)
    * Subtraction (-)
    * Division (/)
    * Exponent (**)
    * Dot (.)
    * Assignment (=) single  // "is"
    * Comparison (==) double
    * Strict Comparison (===) triple
    * Modulo (%)
*/

// ? Exressions

/* 
    * Unprocessed values grounped using the ( )
    * Evaluated to be truthy or falsey
    * Can be empty ( )
    * 
*/

// ? Statements

/* 
    * Keyword
    * Expression
    * and code block
    
    * statements evaluate and execute code block when invoked
*/

// ? Modulo (%)

/* 
    * Checks for remainder of long division
*/

console.log(12 % 3) // returns 0
console.log(12 % 5) // returns 2


/* 
    * 
*/