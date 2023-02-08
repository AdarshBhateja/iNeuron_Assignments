const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort();
// console.log(ages);

ages.sort((a,b)=>a-b);
console.log(ages);

let minAge = Math.min(...ages);
let maxAge = Math.max(...ages);
console.log(`The minimum number is ${minAge} and maximum number is ${maxAge}`);

// calculate median
if(ages.length%2 !==0){
    let median = ages[Math.ceil(ages.length/2)];
    console.log(median);
}
else{
        let median = ages[(Math.ceil(ages.length/2)+Math.floor(ages.length/2))/2];
        console.log("The median is " + median);
    }


//calculate average    
let avg = (ages.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0))/ages.length;

console.log(avg)

// range max-min
console.log(`Range is ${maxAge-minAge}`)

// compare values
console.log(Math.abs(`${minAge-avg}`));
console.log(Math.abs(`${maxAge-avg}`));


