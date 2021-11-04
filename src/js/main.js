let first = "Christian";
let last = "Vallat";
let button = document.getElementById("name");
const div = document.getElementById("div1");
let ul = document.querySelector("ul");

let hobbies = [
  "Watching my favorite sports teams",
  "Eating good pasta",
  "Listening to country music",
];

//Append on page load
hobbies.forEach((hobby) => {
  li = document.createElement("li");
  li.innerText = hobby;
  ul.appendChild(li);
});

//Log and append on button click
//A bit different than the .innerText property we changed in class
function printNames() {
  console.log(first + " " + last);
  let para = document.createElement("p");
  let text = document.createTextNode(first + " " + last);
  para.appendChild(text);
  div.appendChild(para);
}

button.addEventListener("click", printNames);
