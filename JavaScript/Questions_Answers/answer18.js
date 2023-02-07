// The rule is that if the year is divisible by 100 and not divisible by 400, leap year is skipped. The year 2000 was a leap year, for example, but the years 1700, 1800, and 1900 were not.  The next time a leap year will be skipped is the year 2100.  

let year = parseInt(prompt("Enter a year:"));
let month = prompt("Enter a month (e.g. January, February, etc.):");
month = month.toLowerCase();

if (month === "february") {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("February has 29 days in a leap year.");
  } else {
    console.log("February has 28 days.");
  }
} else if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
  console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days.");
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
  console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days.");
} else {
  console.log("Invalid month.");
}
