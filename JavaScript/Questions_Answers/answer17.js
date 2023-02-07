let month = prompt("Enter a month (e.g. January, February, etc.):");
month = month.toLowerCase();

if (month === "february") {
  console.log("February has 28 days.");
} else if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
  console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days.");
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
  console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days.");
} else {
  console.log("Invalid month.");
}
