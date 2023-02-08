let num1 = parseInt(prompt('Enter first number: '));
let num2 = parseInt(prompt('Enter second number: '));
let operator = prompt('Enter the Operator (+, -, *, /): ');

let result;

switch(operator){
  case '+': 
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
    break;
}

if(result)
console.log(result);