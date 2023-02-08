let num1 = parseInt(prompt("Enter first Whole Number"));

for(let i = 1; i<=num1; i++){
    let row = '';
    for(let j = 1; j<=i; j++){
        row += '*';
    }
    console.log(row);
}


let num2 = parseInt(prompt("Enter second Whole Number"));

for(let i = 1; i<=num2; i++){
    let row = '';
    for(let j = 1; j<=num2; j++){
        row += '*';
    }
    console.log(row);
}


let num3 = parseInt(prompt("Enter third Whole Number"));
let row = '';

for(let i = 1; i <= num3; i++){
    for(let j = 1; j <= num3 - i; j++){
        row += ' ';
    }
    for(let k = 1; k <= (2 * i - 1); k++){
        row += '*';
    }
    console.log(row);
    row = '';
}