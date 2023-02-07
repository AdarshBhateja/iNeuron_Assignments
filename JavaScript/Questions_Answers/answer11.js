let today = new Date();

// What is the year today?
let year = today.getFullYear();
console.log(`Year: ${year}`);

// What is the month today as a number?
let month = today.getMonth() + 1;
console.log(`Month: ${month}`);

// What is the date today?
let date = today.getDate();
console.log(`Date: ${date}`);

// What is the day today as a number?
let day = today.getDay();
console.log(`Day: ${day}`);

// What is the hours now?
let hours = today.getHours();
console.log(`Hours: ${hours}`);

// What is the minutes now?
let minutes = today.getMinutes();
console.log(`Minutes: ${minutes}`);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let seconds = Math.round(today.getTime() / 1000);
console.log(`Seconds elapsed from January 1, 1970: ${seconds}`);