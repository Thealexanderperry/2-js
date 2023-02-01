/* 
    ? Switch Challenge

    * Create a grade variable that holds a value (ex: 78)

    * Create a switch statement that checks against the variable.

    * If it's above 89, console log "You got an A"
    * greater than 79 B
    * greater than 66 C
    * greater than 59 D
    * below 59 F
    * default statement of "Input is not a grade"
    
    If you cannot create a switch, try an if/else or a ternary first
*/
const grade = "potato";

switch(true) {
        case grade <= 59:
                console.log("F");
                break;
        case grade <= 66:
                console.log("D");
                break
        case grade <= 79:
                console.log("C");
                break;
        case grade <= 89:
                console.log("B");
                break;
        case grade > 89:
                console.log("A");
                break;    
        default:
                console.log("Input is not a grade...");
}