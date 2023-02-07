let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive.");
  alert("You are old enough to drive.");
} else {
  console.log(`Please wait ${18 - age} years until you are old enough to drive.`);
  alert(`Please wait ${18 - age} years until you are old enough to drive.`);
}