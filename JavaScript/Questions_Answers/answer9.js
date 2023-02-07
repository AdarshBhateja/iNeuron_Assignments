console.log(5 > 2 === true);  // Output: true
console.log('hello' ? true : false);  // Output: true
console.log(Object.keys({}).length === 0 ? true : false);  // Output: true


console.log(2 > 5 === true);  // Output: false
console.log([].length===1 ? true : false);  // Output: false
console.log(Object.keys({}).length === 0 ? false : true);  // Output: false