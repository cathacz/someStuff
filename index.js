let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput").value;
const system = document.querySelector("#system");
function registerUserValue(e) {
  console.dir(e.target);
  userNumber = e.target.value;
}

function convert() {
  let currentSystem;
  console.log(system.value);
  switch (system.value) {
    case "binary":
      currentSystem = parseInt(userInput, 2);
      break;
    case "decimal":
      currentSystem = parseInt(userInput, 10);
      break;
    case "hexadecimal":
      currentSystem = parseInt(userInput, 16);
      break;
    default:
      currentSystem = parseInt(userInput, 10);
  }
  var f = document.getElementById("sys");
  var sys = f.options[e.selectedIndex].value;

  result.innerHTML = `${parseInt(currentSystem, sys)}`;
}

system.addEventListener("change", convert);
// userInput.addEventListener("keyup", registerUserValue);
