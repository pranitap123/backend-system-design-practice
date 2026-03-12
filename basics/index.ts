/*Sum of two numbers
function sum(num1: number, num2: number): number{
     return num1+num2;
}

let answer = sum(50,50);
console.log(answer); */

//is legal:

function isLegal(age: number){
    if(age > 18){
        console.log("is legal")
    }
    else{
        console.log("not legal");
    }

    return age
}

let test: number = isLegal(10);
console.log(test);