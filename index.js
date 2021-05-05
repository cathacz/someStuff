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
  // var f = document.getElementById("sys");
  // var sys = f.options[f.selectedIndex].value;
  // console.log(system.value);
  switch (system.value) {
    case "bin":
      currentSystem = parseInt(userNumber, 10);
      break;
    case "dec":
      currentSystem = 10;
      break;
    case "hex":
      currentSystem = 16;
      break;
    default:
      currentSystem = 10;
  }
  // result.innerHTML = `${parseInt(userNumber, currentSystem)}`;
  result.innerHTML = `${currentSystem.toString(16)}`;
  console.log(currentSystem);
}
system.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
