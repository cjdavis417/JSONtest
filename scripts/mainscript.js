var myDate = new Date();
myDate.toLocaleDateString()

document.getElementById("example").innerHTML = myDate;
console.log("Hello");

fetch("mynames.json")
.then(Response => Response.json())
.then(json => console.log(json));
