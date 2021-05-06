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
  let dec;
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
  switch (sys.value) {
    case "binary":
      currentSys = 2;
      break;
    case "decimal":
      currentSys = 10;
      break;
    case "hexadecimal":
      currentSys = 16;
      break;
    default:
      currentSys = 10;
  }
  // result.innerHTML = `${parseInt(userNumber, currentSystem)}`;
  dec = parseInt(userNumber, currentSystem);
  result.innerHTML = `${dec.toString(currentSys)}`;
  console.log(currentSystem);
  console.log(currentSys);
}
sys.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);

let slider = document.querySelector("#slider").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $(".foreground-img").css(800, `${sliderPos}%`);
});

$("#slider").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $(".foreground-img").css("width", `${sliderPos}%`);
  // Update the position of the slider button
  $(".slider-button").css("left", `calc(${sliderPos}% - 18px)`);
});
