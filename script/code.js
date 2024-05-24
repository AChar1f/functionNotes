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

//Escape Character:  allows for adjustments to be made to code or string 

// console.log('Our lecturer's name is Joel.') will give an error. To fix use an escape character
// console.log('Our lecturer\'s name is Joel.') This will display the message: Our lecturer's name is Joel.
/* 
  Escape Characters
\' : Including a single quote in a string
\" : Double quote
\\ : backslash
\n : Newline
\r : Carriage return
\t : Tab
\b : Word boundary
\f : form feed
*/

// Immediately call a function
// Standard way to make and call a function
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2)
// }
// addition(4, 2)

// Immediately call a function
// (function addition(numb1, numb2){
//     console.log(numb1 + numb2)
// })(4, 2)

// Recursive Function: A function that calls itself and creates a loop.
// function loop(cnt, limit) {
//     if (cnt > limit) {
//         return
//     } else {
//         console.log(cnt)
//         loop(cnt + 1, limit)
//     }
// }
// loop(0, 10) 

// function repeat(cnt, limit) {
//     if(cnt < limit) {
//         return
//     } else {
//         console.log(cnt) 
//         repeat(cnt - 1, limit)
//     }
// }
// repeat(10, 1)

//Do while Loop
// let numbers = [9, 11, 12, 34]
// let cnt = 0
// do { 
//     console.log(numbers[cnt])
//     cnt++
// } while (cnt < numbers.length)

//Factory Function: A function that creates an object and returns the object. Function name must be in camel-case
    //Before making use of factory function   
// let person1 = {
    //     firstName: 'John',
    //     lastName: 'Peter'
    // }
    // let person2 = {
    //     firstName: 'Mustafa',
    //     lastName: 'Moerat'
    // }

//Factory function for example above
// function personDetails(name, surname) {
//     return {
//         firstName: name,
//         lastName: surname
//     }
// }
// let person1 = personDetails('Mustafa', 'Moerat')
// let person2 = personDetails('Qaasiem', 'Harliem')
// console.table(person1)
// console.table(person2)

//Short version of hte code above
// function personDetails(firstName, lastName) {
//     return {firstName, lastName}
// }
// let person1 = personDetails('Mustafa', 'Moerat')
// let person2 = personDetails('Qaasiem', 'Harliem')
// console.table(person1)
// console.table(person2)

//  Constructor Function: Funciton name must be in Pascal case. Requires the use of the keyword this & new when passing arguements. 
// function PersonDetails(name, surname, age) {
//     this.firstName = name
//     this.lastName = surname
//     this.age = age 
// }
// let person1 = new PersonDetails('Muzzamil', 'Charles', 23)
// let person2 = new PersonDetails('Abdus-Sammad', 'Charles', 24)
// console.table(person1)
// console.table(person2)

// function personDetails(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         display() {
//             console.log(
//                 `First name: ${firstName}\n Last Name: ${lastName}`
//             )
//         }
//     }
// }
// let person1 = personDetails('Mustafa', 'Moerat')
// let person2 = personDetails('Qaasiem', 'Harliem')
// console.table(person1)
// person1.display()
// person2.display()

/* 
Promise Object: Supports 2 states, state and result. pending indicates its result is undefined. fulfilled indicates its result is an object. rejected indicates its result is an error. 
fetch() performs a function to get data from the internet. A request.
.then()
async function: function a and b can happen at the same time independent of each other.
sync function: requires 1 function to be completed before the other can begin.
response: 
await: collects data that is ready.
*/

async function fetchData() {
    let response = await fetch('https://randomuser.me/api/?results=50')
    let data = await response.json()
    return data
}

let wrapper = document.querySelector('[wrapper]')

let wrapper = document.querySelector('[wrapper]')
async function displayData() {
    let data = await fetchData()
    let results = await data.results
    results.forEach((data) => {
        wrapper.innerHTML += `
            <div class='car'>
                <img src='${data.picture.large}' alt='${data.name.first}' loading="lazy">
                <p>
                    <span>${data.name.title}</span>
                    <span>${data.name.first} ${data.name.last}</span>
                </p>
            </div>
        `
    })
}
displayData()
