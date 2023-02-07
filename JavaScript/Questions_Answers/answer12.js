let now = new Date();
console.log(now)

let year = now.getFullYear();
console.log(year);

let month = now.getMonth().toString().padStart(2,0);
console.log(month);

let day = now.getDay().toString().padStart(2,0);;
console.log(day);

let hours = now.getHours().toString().padStart(2,0);;
console.log(hours);

let minutes = now.getMinutes().toString().padStart(2,0);;
console.log(minutes);

// - YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

// - DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);

//  - DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);