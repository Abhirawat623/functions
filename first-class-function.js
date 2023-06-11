// function wrapper(){
//     return "Pehla vala hai ye to";
// }

// function greetMe(inner, name){
//     let message = inner();
//     console.log(name,message);
// }
// greetMe(wrapper,"Abhishek"); 

function greetMe(name){
    function wrapper(){
        let name ="Abhi"
        console.log(name, "WELCOME TO Delhi");
    }
    return wrapper;
}
const output = greetMe();

output();
// console.log(output());
//console.log(output);

// greetMe;
// greetMe();
// console.log(wrapper()());
// console.log(greetMe());
// console.log(greetMe);


// console.log(output());



// greetMe()();