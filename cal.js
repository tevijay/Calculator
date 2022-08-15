const userInput = document.getElementById('user-input')
let expression = ''
function press(num){
   expression += num
   userInput.value = expression;
}
//console.log(expression);

function equal(){
    userInput.value = eval(expression); 
    expression = '' ;
}


function erase(){
    expression = ""
    userInput.value = expression;
}
function divisors(integer) {
    var results = []
    for(let i = 2; i< integer; i++){
        if(integer % i === 0 ){
         results.push(i); 
         } 
    }
    return results.length? results : `${integer} is prime`
  };
  console.log(divisors(17));
  console.log(Math.random());