/* 
Functions
If Statements 
Switch Statements
For Statements
Query Selector
Eval Functions
*/

// Function: a set of statements to be utilized as needed. Parameters go in between the paranthesis.
//  Example 1 => function declared
// function display() {
//     console.log("Hello There")}
//     display()


// function greeting(firstName) {
//     console.log(`Welcome ${firstName}`)
// }
//Argument: what goes in the paranthesis of a function the function is called.
//     greeting('Qaasiem')
//     greeting('Mustafa')

/* add last name as well to greeting.
function greeting(firstName, lastName) {
    console.log(`Welcome ${firstName } ${lastName}`)
}
Argument 
greeting('Qaasiem', 'Harliem')
greeting('Mustafa', 'Moerat')
*/
// predefined values get updated if users input a value otherwise it remains. In the example below if 12 was not put in by the user the 6 which is a predefined numb2 value will remain.
// function add(numb1, numb2 = 6) {
//     console.log(numb1 + numb2)
// }
// add(4,  12)

//function that contains a parameter that acts as an array. Used for when amount of arguements arent known and can be infinite. Uses Rest parameter x(...y) Eg: function sumOfValue(...args)
// function  sumOfValues(...args) {
//     console.log(args)
//     console.log(args.reduce((curr, n) => curr + n))
// }
// sumOfValues(2, 5)
// sumOfValues(3, 2, 1)
// sumOfValues(8, 6, 7)
// sumOfValues(9, 8, 7, 6)
    /* reduce is a method that calculates the sum of numbers in an array or arguements. Already has a logic to it being previous, current and following values as well as the ability to use arrow functions.
    .forEach() is a method of an array. 
    Callback function is a function that is passed as an arguement to another function.
    */

    // function sumOfValue(...args){
    //     console.log(args.reduce((curr, n) => curr + n))
    // }
    // sumOfValue('Sipho', 1, 'Jamin', 2, 3, 'Leah', 4 , 2, 3, 1, 'Joel')


    //create a variable for an empty array
    // reference the function to target the elements in the array
    //
    // function addition(...numbers) {
    //     let digit = []
    //     numbers.forEach((value) => {
    //         if (!isNaN(value)) {
    //             digit.push(value)
    //         }
    //     })
    //     console.log(digit)
    //     console.log(digit.reduce((c, n) => c + n))
    // }

    // addition('Sipho', 1, 'Jamin', 2, 3, 'Leah', 4, 2, 3, 1,'Joel')
    
    // let numbers = [1, 2, 3, 9]
    // numbers.forEach((value) => {
    //     if (value == 9) {
    //         console.log('Nine')
    //     } else {
    //         console.log(value)
    //     }
    // })
    // let sumOfValue = ['Sipho', 1, 'Jamin', 2, 3, 'Leah', 4 , 2, 3, 1, 'Joel']
    // let filteredNumbers = sumOfValue.filter(num => typeof num === 'number')
    // console.log(filteredNumbers)
    // console.log(filteredNumbers.reduce((curr, n) => curr + n))


    //Example 2 => return statement
// function greeting(firstName) {
//     console.log('My name is Abdurahmaan')
// }
// greeting()


//Function expression: when we assign a variable to a function. (to act as a function)
//Function declaration: function run() {}
// function greeting() {
//     console.log("Hello There")
// }

    // VS
//Function Expression: let run = function() {console.log('run')} run()
// FUNCTION EXPRESSION EG1 
//let addition = function() {
//     console.log(3 + 3)
// }
// addition()

//EG2
// let multiplication = (numb1, numb2) => {
//     console.log(numb1 * numb2)
// }
// multiplication(4, 3)

//Hoisting: process of moving function declarations to the top of the file. Call a function that is defined using the function declaration syntax before it's definition. Function declaration can be hoisted while function expression cannot(result in an error). EG: 
// greeting('Abdurahmaan')
// function greeting(name) {
//     console.log(`Assalamualaikum ${name}`)
// }

// addition(3, 4)
// let addition = (numb1, numb2) =>{
//     console.log(numb1 + numb2)
// }

// let data = [9, 'Peter', 'Sipho', 3, 4, 'Sarah', 'Sisi']
//     data.forEach(person => {
//         if (person.startsWith('s')) {
//             console.log('person')
//         } else {
//             console.log(value)
//         }
//     })

    /*     let data = [9, 'Peter', 'sipho', 3, 4, 11, 'Sarah', 'Sisi']
    data.forEach((person) => {
        if ((typeof person == 'string') && (person.toLowerCase()[0] == 's'))
                console.log(person)
    })
    */

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i])
// }
// console.table(data)


// let numb5 = -8
// console.log(Math.abs(numb5)) always returns a number in and it makes it positive.

// Rest operator vs Spread operator
/*
Rest Operator Example: three dots is precedes the parameters in the funnction
function(...numb1) {

}

Spread Operator Example:  allows access to each element at a time. denoted by ...variableName. Shorthand for a loop.
let numbers = [ 2, 8, 9, 5, 7, 15, 16, 24]
console.log(`Highest number: ${Math.max(...numbers)})
*/

// let numbers = [2, 8, 10, 1, 4, 11]
// console.log(`Highest number: ${Math.max(...numbers)}`)
// console.log(`Lowest number: ${Math.min(...numbers)}`)

/*Shallow copy: will copy the elements and it location in memory. thus changes to to an array will affect both arrrays in this case. Works for strings and arrays */

// let firstName = 'Mustafa'
// console.log(...firstName)

// let arr1 = [1, 4, 5]
// let arr2 = arr1
// arr2[0] = 10
// console.log(`arr1: `, arr1)
// console.log(`arr2: `, arr2)


//Deep copy: copies the elements and stores it in a new locations in memory. thus changes made will not affect both arrays in this case.

// let arr1 = [1, 4, 5]
// let arr2 = [...arr1]
// arr2[0] = 10
// console.log(`arr1: `, arr1)
// console.log(`arr2: `, arr2)

//Array.from() : allows one to clone an array to a new array. Alternate to spread method.

// let arr1 = [1, 4, 5]
// let arr2 = Array.from(arr1)

// arr2[0] = 10
// console.log(`arr1:`, arr1)
// console.log(`arr2:`, arr2)