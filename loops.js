// ? Loops

/* 
    Allow us to execute a block of code repeatedly until an exit condition has been met.
*/

// ? For Loop

/* 
    We set out loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with the condition
    
    Syntax:

    for (start; stop; step) {
        code block to execute until stop condition returns false
    }

*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// ? Inifinite Loop - lack of stop condition
// for (let i = 0; ;i++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticecpialidocious"
console.log(longWordEN.length)

for (count = 0; count < longWordEN.length; count = count + 1) {
    console.log(`Index: ${count}, Letter: ${longWordEN[count]}`)
} 

// ? For-in Loop

/* 
    Allows us to seek and index value of an iterable against a condition.
    * For-in loops do not require an index number
    * For-in do not require a stop statement
    */


    /* 
    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - (ex: longWordEN) ---- this is a  ---- for ---
    */
let longWordDE = "kraftfahrzueg-haftplifchtversicherung"

for (i  in longWordDE) {
    console.log(i)
}

// ? for-of Loop

/* 
    Allows us to seek iterable value against the condition

    * 
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for ( i of longWordPL) {
    console.log(i)
}


/* 
    Difference between for-in and for-of in terms of use?
    * For-in allows us to loop over items that are not an array
    * For-of only works if an item is indexed like an array or a string
*/


/* 
    ? Challenge

    * using a traditional for loop, set an index to 2.
    * make a condition where if that number is greater than -100,
    * You will be subtracting 4
    * Console log each iteration
*/


for (i = 2; i >= -100; i = i - 2) {
    console.log(i)
}

/* 
    ? Challenge 2

    * Loop over an array with for-in or for-of
    * Console log each animals respective "sound" (ex: meow for a cat)
    * Extra: use a ternary
*/

//Switch
let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

for (animal of animalArray) {
    console.log(animal)
    if ( animal == "pig") {
        console.log("Oink");
    }
    else if ( animal == "cat") {
        console.log("Meow");
    }
    else if (animal == "mouse") {
        console.log("squeek")
    }
    else if ( animal == "dog") {
        console.log("Woof");
    }
    else if ( animal == "bird") {
        console.log("Chirp");
    }
} 

// ? While loop

/* 
    * Executes a statement inside of a code block
    * It does so as long as a while condition valuates to true.

    Syntax

    while (true) {
        do this until false
    }


*/

//while (true) {
//    console.log("IT'S AN INFINITE LOOP MORTY!")
//}

let loopcount = 0;

while (loopcount <= 100) {
    console.log(loopcount)
    loopcount++
}

// How to use while to iterate over and iterable

let carArray = ["Honda", "BMW", "Porsche", "Lada", "Maserati"]

let carCount = 0

while (carCount < carArray.length) {
    console.log(carArray[carCount])
    carCount++
}

// ? do while loop

/* 
    Executes code in the do section while a condition remains true
*/

let doCount = 0

do {
    console.log(carArray[doCount])
    doCount = doCount + 1
}   while (doCount < carArray.length)
