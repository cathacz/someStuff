let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput").value;
const system = document.querySelector("#system");
function registerUserValue(e) {
  userNumber = e.target.value;
}

function convert() {
  let currentSystem;
  var f = document.getElementById("sys");
  var sys = f.options[f.selectedIndex].value;
  console.log(system.value);
  switch (system.value) {
    case "bin":
      currentSystem = parseInt(userNumber, 2);
      break;
    case "dec":
      currentSystem = parseInt(userNumber, 10);
      break;
    case "hex":
      currentSystem = parseInt(userNumber, 16);
      break;
    default:
      currentSystem = parseInt(userNumber, 10);
  }

  result.innerHTML = `${parseInt(currentSystem, sys)}`;
}

system.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
