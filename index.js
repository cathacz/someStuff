let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const system = document.querySelector("#system");
function registerUserValue(e) {
  userNumber = e.target.value;
}
function convert(e) {
  e.preventDefault();
  let currentSystem;
  dec = parseInt(userNumber, 10);
  // var f = document.getElementById("sys");
  // var sys = f.options[f.selectedIndex].value;
  // console.log(system.value);
  switch (system.value) {
    case "binary":
      currentSystem = 2;

      break;
    case "decimal":
      currentSystem = 10;
      break;
    case "hexadecimal":
      currentSystem = 16;
      break;
    default:
      currentSystem = 10;
  }
  // result.innerHTML = `${parseInt(userNumber, currentSystem)}`;
  result.innerHTML = `${dec.toString(currentSystem)}`;
  console.log(currentSystem);
}
system.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
