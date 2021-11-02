let first = "Christian";
let last = "Vallat";
let button = document.getElementById("name");
const div = document.getElementById("div1");

let hobbies = [
  "Watching my favorite sports teams",
  "Eating good pasta",
  "Listening to country music",
];

//Log on page load
console.log("Hi, my name is " + first + " " + last);
console.log("Some of my favorite hobbies include:");
hobbies.forEach((hobby) => {
  console.log(hobby);
});

//Log and append on button click
function printNames() {
  console.log(first + " " + last);
  let para = document.createElement("p");
  let text = document.createTextNode(first + " " + last);
  para.appendChild(text);
  div.appendChild(para);
}

button.addEventListener("click", printNames);
