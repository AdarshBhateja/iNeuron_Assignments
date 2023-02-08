let weight = parseFloat(prompt('Enter your weight in kg'));
let height = parseFloat(prompt('Enter your height in meter'));

let bmi = (weight,height)=>{
    return weight/(height*height);
}

let bmiNum = bmi(weight,height);

console.log('your bmi is ' + parseFloat(bmiNum.toFixed(2)));
if(bmiNum<18.5){
    console.log('You are underweight');
}
else if(bmiNum<24.9){
    console.log('Your weight is normal');
}
else if(bmiNum<29.9){
    console.log('You are overweight');
}
else{
    console.log('You are Obese');
}