
var num1 = prompt("Inserisci il primo numero");
var num2 = prompt("Inserisci il secondo numero");

if (num1 > num2) {
  var maggiore = num1;
}else if (num2 > num1) {
  var maggiore = num2;
}

document.getElementById("result").innerHTML = "Il numero maggiore è: " + maggiore;
