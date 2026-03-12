/*Sum of two numbers
function sum(num1: number, num2: number){
     return num1+num2;
}

let answer:number = sum(50,50);
console.log(answer); */

/*is legal:
function isLegal(age: number): number {
    if (age > 18) {
        console.log("is legal");
    }
    else {
        console.log("not legal");
    }
    return age;
}
var test = isLegal(10);
console.log(test);
*/

//function returning another function
function delayCall(fn: () => void){
    setTimeout(fn, 1000);
}

delayCall(function(){
    console.log("hello");
})