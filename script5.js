let virusButton = document.getElementById("virusAlert");

virusButton.addEventListener("click",function(){virus()})

const alertPage = document.getElementById('alertalert');

setTimeout(function(){
  alertPage.style.visibility = 'visible';
}, 1000);

setTimeout(function(){
  const fact = document.getElementById('factFade');

  fact.style.display = 'none';

}, 1000);

function virus() {
  var alertText = "Oh no! Looks like your computer has a virus.";
  alert(alertText);
}

function later(){
  document.getElementById("fact1").src="fact2.jpeg"
}
