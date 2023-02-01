    // ? Variables

    /* 
        Containers that store data in memory
        * Declaration
            * allows memory space to be reserved
            * starts with let, var, or const
            * cannot start with a number or characters other than $ or _
            * if no value is assigned, it's undefined
        * Initialization
            * assignment of data value
            * can be any value or data type (str, int, arr, fx, class, etc.)
            * can be reassigned (except for const)
    */


    // Variable Declaration
    let firstName
    console.log(firstName)

    // Variable Declaration and variable initialization
    let lastName = "Perry"
    console.log(lastName)

    // Reassignment
    firstName = "Alex"


    // ? string Concatenation
    // let fullName = firstName + " " + lastName

    // ? String Interpolation
    let fullName = `${firstName} ${lastName}`

    console.log(fullName)

    // (a) (b) (c)          (d)
    let address = "123 bismark"
        // (e) =     (f)
    // (a) - keyword
    // (b) - variable identifier
    // (c) - assignment operator
    // (d) - value or initializer
    // (f) - variable initialization or value assignment

    // Var is joisted whereas let is not
    // ! Dont use if you can avoid it
    
    var age = 29
    console.log(age)
    
    // ? Const var CANNOT have a reassigned value
    //const ssn = "123-45-6789"
    // ssn = "invalid ssn"
    // console.log(ssn) TypeError: cannot reassign a const

    /* 
        ? Coding Practices for Variables
        * be concise (ex: firstName instead of usersFirstName)
        * be specific (ex: value instead of i)
        * utilize camelCase (most popular in JS)
        * snake_case
        * PascalCase, or
        * skewer-case
        * nocase, or
        * SCREAMING_CASE
    */

    /* 
    Set a few Variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code

    Once done, conecntrate or interpolate them together into new variable to create your address stamp

    create new variable that utilizes all of those variable values

    console log it
    
    !spicey mode - assign the value of state to be owercase but when you console log your address stamp, utilize a method to make sure it's capitalized.

    58sh
    */


    let fName = "Alex"
    let lName = " Perry"
    let houseNumber = "\n797"
    let aptNumber = " Apt 1"
    let street = " Blizzard ave"
    let city = "\nFunkytown"
    let state = ", Virginia"
    let postcode = ", 35359"

    console.log( fName + lName + houseNumber + aptNumber + street + city + state + postcode )

    let addressStamp = ( fName + lName + houseNumber + aptNumber + street + city + state + postcode )

    console.log(addressStamp)


    let addressStampInterpolated = `${fName} ${lName} \n ${houseNumber} ${street} ${city} ${state.toUpperCase} ${postcode}`
    console.log(addressStampInterpolated)


    