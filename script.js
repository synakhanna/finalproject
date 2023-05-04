
let buttonGenLocation = document.getElementById("adLocation");

setTimeout(buttonGenerate, 6000);

function buttonGenerate(){
  let adButton = document.createElement("A");
  adButton.innerText = "Buy Product";
  adButton.classList.add("button3");
  adButton.href = "page4.html";
  buttonGenLocation.appendChild(adButton);
}