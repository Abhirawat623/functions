// function calculate(a,b,... args){                // args and rest both can be used here and must be used in last of the console log 
//     console.log(a,b)
//     console.log(args)
// }

function calculate(...rest){
    let total = 0;
    for (let value of rest){
        total +=value;
    }
    console.log(total)
}
calculate(1,4,7,8,9,5,4,7,8,7,8,7);