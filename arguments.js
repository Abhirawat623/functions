// function add (){
//     console.log(arguments);
// }

// const sum =add(1,2,12,123,332,22)
// console.log(sum)

// function calculate(){
//     // return a+b;
//     arguments[2]=0
//     console.log(arguments);
// }

// calculate(9,7,56,56,56,56,)

// function calculate(){
//     const arr = [...arguments];
//     console.log(arr)
//     let sum =0;
//     for (let value of arguments){
//         // console.log(value);
//         sum += value;
//     }
//     console.log(sum)
    
// }

// calculate(4,5,7,8,96,4,65,4,5,4,5,4,85,1,5,21)

function add ( a=10){
    a=15454;
  
    console.log(a);
    console.log(arguments);
    arguments [0]=1 ;
    console.log(arguments)
}
add(8)