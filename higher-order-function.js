// function wrapper(){
//     return "welcome"
// }


// //High Order Function
// function greetMe(wrapper){                    
//     console.log("prakash", wrapper());
// }
// greetMe(wrapper);

// function displayMessage(){
//     return function (){
//         console.log("hello from the inner function")
//     }
// }

// const out =displayMessage();
// out();

// const arr = [1,2,3,4];

// function squaredArray(arr){
// let squaredNumber = [];
// for(let number of arr){
//     squaredNumber.push(number**2)
// }
// return squaredNumber;
// }

// function cubedArray(arr){
//     let cubeNumber = [];
//     for(let number of arr){
//         cubeNumber.push(number**3)
//     }
//     return cubeNumber;
//     }
    

// console.log(squaredArray(arr));
// console.log(cubedArray(arr));

const arr =[1,2,3,4,5];
function square(number){
    return number **2;
}

function cube(number){
    return number **3;
}


function calculatePower(wrapper,arr){
let tempArr = [];
for (let number of arr){
    tempArr.push(wrapper(number))
}
return tempArr;
}

const squareOfNumbers = calculatePower(square,arr);
console.log(squareOfNumbers);

const cubedArray = calculatePower(cube,arr);
console.log(cubedArray);









