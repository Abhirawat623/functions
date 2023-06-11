// It takes an argument
// // should return something
// for some input you should get the same output

// function getDoubleValue(number){
//     return number *2;
// }
// const result = getDoubleValue(5);
// console.log(result)

//this is impure function
// function appendNumbers(arr){
//     arr.push(5,6,7);
//     return arr;
// }

// const result = appendNumbers([1,2,3,4]);
// console.log(result);


function addElements(arr){
    let newArray =[];
    newArray.push(...arr,6,7,2,54,456,52); // spread
    return newArray;
}
console.log(addElements([1,2,3,4,5]));