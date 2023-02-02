// ? Functions

/* 
    ? A block of reusable code
    * Can take in paramters(doors to the inside of your function)
    * Perform an action
    * return a result

    ? There are two types of function:
        * function declaration
            * are hoisted
        * Function expression
            * are not hoisted

    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }
*/


function sayHello() {
    return "Hello January Cohort"
}

console.log(sayHello())

function addNums(num1, num2) {
    let result = num1 + num2
    return result
}

console.log(addNums(4, 6))

// ? Function Expression

/* 
    * utilizes a variable as a placeholder

    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old.`
}

console.log(nameAge("Ian", 28))

/* 
    ? Challenge

    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors.
    * Check if the data type is a Number. If not, return "please use whole numbers only"
    * Please return the result but also the value of the top and bottom seperately.
*/


// ? Arrow Functions

/* 
    * Introduced in ES6
    * Concise way of writing functions
    * part of fx expression family
    * Do not bind to .this or super 
*/

// ? Concise body arrow

/* 
    * Can only have no or one parameter
    * Code block must not have { }
    * Return statement must be implicit
*/

let greetDoctor = drName => ` Whats up, ${drName}`

console.log(greetDoctor("Doc"))

let greetEveryone = () => `Hello Everyone!`
console.log(greetEveryone())

// ? Block Body Arrow Functions

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2
    } else {
        return `You can only pass string values as arguments`
    }
}

console.log(concatenateString("hello", 1));


// ? Immediately invoked function expression

(function() {
    console.log("IIFE")
})()



// ?