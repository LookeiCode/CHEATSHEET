// VARIABLES **************************

//old way to declare variables
var varName =

//variables that CAN be changed
let varName =

//variables that CANT be changed
const varName = 

// ********************************************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************************************************************************************************
// TYPES 

// ********************************************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************************************************************************************************
// IF/ELSE

//normal if/else
if ('insert condition here') {
    'result if true'
} else {
    'result if false'
}

//else if

// * you can have multiple 'else if'
if ('insert 1st condition here') {
    'result if true'
} else if ('insert 2nd condition here') {
    'result if first if is false'
} else {
    'result if all ifs are false'
}

// if

// * omitting the else means nothing happens if the if(s) is false
if ('insert condition here') {
    'result if true'
}


//ternary if/else

// var/name       if (?)    else (:)
let name = age > 10 ? "Pedro" : "Jack"
//  if this ^ is true then ^   else ^

// ********************************************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************************************************************************************************
//FOR LOOPS


// ********************************************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************************************************************************************************
//WHILE LOOPS

// ********************************************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ********************************************************************************************************
//FUNCTIONS

//normal function
function DoSomething() {

}

//arrow function
const DoSomething = () => {

}

//exporting functions

//normal function
export default function DoSomething() {
   
}

//arrow function
export const DoSomething = () => {

}

// ********************************************************************************************************



// ********************************************************************************************************
// OBJECTS + DESTRUCTURING 

// * objects use {}
// * objects are key/value pairs
// * after the key you must put a : THEN the value
// * after each key/value pair you must add a comma - the last key/value pair doesn't need one

const example = {
    key: value,
    key1: value1
}

//destructuring example
const person = {
    name: "Tyler",
    age: 29,
    isMarried: true
}
// ! creating variables to represent specific values inside of an object
const name = person.name
cosnt age = person.age
const married = person.isMarried

// ! the above works fine but takes too much space, we can do this in one line
// ! this is where destructing comes in

const {name, age, isMarried} = person
// you set/deconstruct any key/value pair as a variable inside of the {}
// now you have 3 separate variables that represent their corresponding properties inside of of the object (in this case it's 'person')
// it's literally the same as lines 126-128 but in just one line


// * you can also assign values to object keys from variables directly
const name = "Tyler"
const age = 29

const person = {
    name: name,
    age: age
}
// * the name key has the same value as the name variable

// * when you do this you can also just omit the "value" part entirely (shorthand notation version)
// * you can only do this if the key name is the same as the variable name you're connecting it to
const name = "Tyler"
const age = 29

const person = {
    name,
    age
}

// * If you want to copy an object but only change one property of it
const person = {
    name: "Tyler",
    age: 29,
    isMarried: true
}

//     spread op... object name, the change
const person2 = (...person, name: "Jack")
// ! now person 2 is exactly the same as person 1, except the name value in person2 is set to Jack instead
// ! the spread operator (...) basically says "i want to keep everything in the person object" but, I want to change THIS (the name in this case)
// it's just saying that person2 is the same as person, plus "THIS" (whatever you add/change)

// ! this also works with arrays
const names = ["Tyler", "Jack", "Jill"];
const names 2 = [...names, "Jay"]

// ! This is how you manipulate and add elements to arrays that are inside of states (in React)

// ********************************************************************************************************



// ********************************************************************************************************
// ARRAY METHODS (Array Functions)

.map()
.filter()
.reduce()

//map array method example
const names = ["Tyler", "Jack", "Jill"];

// * the map function takes an argument
// * the argument is some variable you define that REPRESENTS each element in the array. You can name it whatever you want
names.map(() => {})

// * map will iterate through the entire array and do something to each element 
names.map(() => {
    'whatever is inside of this function'
})

// ! the "name" argument is connected to every object in the array
// ! you're literally saying "name" (because that's the variable/argument name we passed in) represents each element in the array
// ! so now this map function will log every name in the array in the console
names.map((name) => {
    console.log(name)
})
// ! RECAP: "names" is the array with elements, we map (aka iterate) through it, we pass in an argument that represents each element in the array as we iterate through it, then run the code in the function that does something to/with the elements in the array

// * If you wanted to mutate each element directly

// ! if you were to return something inside of this function, each element in the names array would change corresponding what you returned
names.map((name) => {
    return "Joe"
})
// ! now every element in the names array is "Joe"
 // ! what if you just wanted to add a 1 to the end of each name?
 names.map((name) => {
    return name + "1"
})
// ! you return "name" because as said before it represents each element in the names array, then just add (+) 1 to it
// * 1 is in quotes "1" as a string because the elements in the array are strings 




// ********************************************************************************************************