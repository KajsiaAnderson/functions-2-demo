////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
    // let's check to see if num1 and num2 can be turned into numbers
    if (+num1 && +num2){
        num1 = +num1
        num2 = +num2
        return callback(num1, num2)
    } else {
        console.log("Aborting: Put in valid numbers")
    }
}

console.log(calculator(3, "4ft", multiply))
// should be 12 if 3*4. But since "4ft" isn't a number --> invalid. Unless if you changed to parseInt instead of + 

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        //  product is a placeholder for each object... the element.
        callback(product, discount)
    })
}

// applyDiscounts(catProducts, applyFlatRateDiscount, 2)
// applyDiscounts(dogProducts, applyPercentDiscount, 0.1)

// console.log(catProducts)

const applyDiscountsByCategory = (arr, category, callback, discount) => {
    arr.forEach(product => {
        if (product.category === category){
            callback(product, discount)
        }
    })
}

applyDiscountsByCategory(dogProducts, 2, applyFlatRateDiscount, 1)

// console.log(dogProducts)



////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwichMaker(bread) {
    return function(ingredients) {
        let order = `You ordered a ${bread} bread sandwich with `

        for (let i = 0; i < ingredients.length; i++) {
            order += `${ingredients[i]} `
        }

        return order
    }
}

const makeWheatSandwich = makeSandwichMaker("wheat")
const makeRyeSandwich = makeSandwichMaker("rye")

console.log(makeWheatSandwich(['tomato', 'lettuce', 'bacon']))
console.log(makeRyeSandwich(['mayonaise']))

// or you can type it out like this:

// function makeSandwich(bread) {

//     return function(ingredients) {
//         let order = `You ordered a ${bread} bread sandwich with `

//         for (let i = 0; i < ingredients.length; i++) {

//         if (i === ingredients.length - 1 && i !== 0) {
//             order += `and ${ingredients[i]}.`
//         } else if (ingredients.length === 1) {
//             order += `${ingredients[i]}.`
//         } else {
//             order += `${ingredients[i]}, `
//         }
//         }

//         return order

//     }
// }

////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
const copyArrAndChange = (arr, cb) => {
    let results = []
    for (let i = 0; i<arr.length; i++){
        let newValue = cb(arr[i])
        results.push(newValue)
    }
    return results
}

// this function takes a string, and formats it in camel case
const copyStrToCamelCase = str => {
    // str is a string w/ possible spaces in it, I want to split up that string into an array of the words it contains
    const splitStr = str.split(' ')

    //define my final result: it is empty for now
    let camelCaseStr = ''

    // loop over every word from my original string
    for (let i = 0; i<splitStr.length; i++){
        // set a variable to the current word we're looking at in the loop
        let word = splitStr[i]

        // take that word and lowercase all of it
        word = word.toLowerCase()

        // if the word wasn't the first one in the string, then we need to capitalize it
        if (i !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }

        // slap that word onto our final result
        camelCaseStr += word
    }

    // this is our final result: should have all the formatted words slapped together: return it
    return camelCaseStr
}

// console.log(copyStrToCamelCase('tHIS cLass Is SO cOOL'))

console.log(copyArrAndChange(lotr, copyStrToCamelCase))


// CODE HERE


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

// const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
}

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

// const placesThatStartWithA // = places.filter()


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
}

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

// const remaining // = expenses.reduce(//callback, //initial value)