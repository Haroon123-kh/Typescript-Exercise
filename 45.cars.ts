// Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly

// function storeCarInfo(manufacture: string, modelName: string, ...extraoption: { [key : string]: any } [] ): object {

//     const carInfo = {
//         manufacture,
//         modelName,
//         ...Object.assign()
//     }

//     return carInfo;
// }

let obj1 ={ num1:1, num2:2 }

let obj2 ={ num3:1, num2:5 }

let obj3 = Object.assign(obj1, obj2)

console.log(obj3);


