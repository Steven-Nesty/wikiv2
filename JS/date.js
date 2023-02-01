// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string

let time=document.getElementById("today__date");
time.innerHTML=n
console.log(n);
