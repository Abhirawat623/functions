// const arr = [1,2,3,4,5];

// // const output = arr.reduce(((acc,cur) => acc+cur),0);
// // console.log(output)
// const reducer = (acc,cur) => acc+cur;

// const output = arr.reduce(reducer,100 );
// console.log(output)

const arr =[1,2,3,4,5,6,7,8,9,10];

const adder = (acc , cur)=>acc+cur;

const output = arr.reduce(adder,0);
console.log(output)