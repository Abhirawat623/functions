// // const arr = [1,2,3,4,5];

// // function getSquare(number){
// //     return number**2;
// // }

// // const output = arr.map(getSquare);
// // console.log(output);
// // console.log(typeof output); 






// // // function squareofArr(arr){
// // //     const tempArr =[];
// // //     for (let number of arr){
// // //         tempArr.push(number **2); 
// // //     }
// // //     return tempArr;
// // // }

// // // console.log(squareofArr(arr));

// const arr =[1,2,3,4,5];



// const newArr= arr.map((number) =>number **2)

// console.log(newArr);


const arr = [1,2,3,4,5,6];

const newArr = arr.map((index,number)=>{ console.log(index); return number**3; });
console.log(newArr); 