// ? Conditionals & Logic Gates

/* 
    * Conditional statements checks if an expression is true.
    * The expression must alwys resolve to true.
    * If it's truthy, a code within a statement executes.
    * If an expression is false, nothing happens unless we specify otherwise.
*/


// ? Falsey Values

/* 
    * Falsey values is one that is considered false in boolean context

    *if JS expects false boonlean it can return the follow:
    
    * false
    * 0
    * '', '', ``
    * undefined
    * null
    * NaN
*/

// ? If statements

/* 
    *Checks if something is true and executes code
*/

let lightSwitch = "off"

if (lightSwitch == "on") {
    console.log("The light is on...")
}

else {
    console.log("The light needs to be turned on...")
}

/* 
    ? else if statement

    * Allows us to add additional condition if the prior one has not been satisfied
*/

let temp = "bungalo"

if (temp >= 50) {
    console.log("It's nice out")
}

else if (temp < 50 && temp > 32 ) {
    console.log("You might want a jacket")
}

else if (temp <= 32) {
    console.log("Watch out for ice!")
}

// ? Else Stamement

/* 
    * If all else fails
*/

else {
    console.log(`${temp} is not a valid temperature range`)
}


// ? SYNTAX:

/* 
    if (conditionIsTrue) {
        execute this code block
    }
    else if (conditionIsTrue) {
        execute this code
    }
    else (conditionIsTrue) {
        execute this code
    }

*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I go to the movies or eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movie = true)
        * (no dinner & no movie = false)
    
    * AND Operator ( && )
        * True if BOTH conditions are true
        * ex: I will be happy if I go to movies and dinner
        * (dinner and movies = true)
        * (dinner & no movies = false)
        * (no dinner & movies = false)
        * (no dinner & no movies = false)
    * NOT Operator ( ! )
        * Flips the logical operation
        * (If something is true it will flip it to false & the same false to true)
*/

lightSwitch = false

if (lightSwitch) {
    console.log("light switch is on!")
}

if (!lightSwitch) {
    // (!lightswitch)     <---this one is proper form
    // (lightswitch == false)
    // (lightswitch != true)
    // all of the above mean the same thing.
    console.log("light switch is on...")
}

// AND Example

let home = true
lightSwitch = false
//check least likely solution first.

if (typeof home !== "boolean" || typeof lightSwitch !== "boolean") {
    console.log("Invalid input")
}
else if (home && lightSwitch) {
    console.log ("You're home and the lights are on!")
}
else if (home && !lightSwitch) {
    console.log("You forgot to turn on the lights...")
}
else if (!home && lightSwitch) {
    console.log("You left home without turning off the lights...")
}
else if (!home && !lightSwitch) {
    console.log(" Home is empty and lights are off...")
}

// OR Example

if (!home || !lightSwitch) {
    console.log(`home value is ${home} and light switch value is: ${lightSwitch}`)
}


/* 
    ? Challenge

    * Create a condition that will check the user's age and insurance status:
    * If the user is under 16, they can't drive
    * If the user is 16 thru 18, and they're male their insurance is highest
    * If the user is 16 thru 18, and they're female their insurance is high
    * If the user is older than 18 but less than 21 and they're male, their insurance is average
    * If the user is older than 18 but less than 21 and they're female, their insurance is below average
    * If they're over 21 regardless whether male or female, the insurance is low.
*/


let age = 19
let gender = "male"

if (age < 16) {
    console.log ("You cannot drive")
}
else if ( age < 18 && age >= 16 && gender =="male") {
    console.log ("Insurance is Highest")
}
else if (age < 18 && age > 16 && gender =="female") {
    console.log ("Insurance is High")
}
else if (age > 18 && age < 21 && gender =="male") {
    console.log("Insurance is Average")
}
else if (age > 18 && age < 21 && gender =="female") {
    console.log("Insurance is Below Average")
}
else if (age >= 21) {
    console.log("Insurance is low")
}


// ? Ternaries

/* 
    * A quick way of creating a if/else conditional

    * 
*/

let ignition = true
//true for "on" false for "off"
let ignitionCount = 0

if (ignition) {
    console.log("The car is on...")
    ignitionCount = ignitionCount + 1
    console.log(`Ignition count: ${ignitionCount}`)
}
else {
    console.log ("the car is off")
}


ignition ? console.log("the car is on...") : console.log("the car is off")

/* 
    Ternary Syntax

    conditional ? code block if true : code block if false


*/

let season = 1

if (season == 1) {
    console.log("Spring")
}
else if (season == 2) {
    console.log("summer")
}
else if (season == 3) {
    console.log("fall")
}
else if (season == 4) {
    console.log("winter")
}
else{
    console.log(`${season} is not an appropriate input`)
}

season == 1 ? console.log("spring")
            : season == 2 ? console.log("summer")
            : season == 3 ? console.log("Autumn")
            : season == 4 ? console.log("winter")
            : null

// ! if you do not have an else statement you must use a null.

/* 
    Ternary Syntax:

    conditional ? code block if true : code block if true

    conditional ? code block if true
                : else if statement ? code block if true
                : else if statement ? code block if true
                : else statement of null

*/
let age2 = 19

age2 < 18 ? console.log("You're still a wee lad")
            : age2 < 21 ? console.log("You can travel, but cannot drink")
            : age2 >= 21 ? console.log("You can hop and ship and get wasted!")
            : null

// ? Switch Statements

/* 
    * Switches execute a block of code, dependant on a different case

    * We ask a question that requires a specific response determined by our answer

    * 
*/

let uprightInstructor = "Benny"

switch(uprightInstructor) {
// is the information our case is compared against
    case "Paul":
        // case is a condition that's compared against switch
        //execute the code below
        console.log(`${uprightInstructor} is a lead Upright Instructor`)
        break
        //used to stop other cases from evaluating
    case "Rob":
        console.log(`${uprightInstructor} is on Vacation`)
        break
    case "Matt":
        console.log(`${uprightInstructor} is an Operations Manager`)
        break
    default:
        console.log(`${uprightInstructor} may or may not work here.`)
    }