
invia.addEventListener("click", function () {
  
  var numero = parseInt(prompt("Inserisci un numero: "));
  var color = document.getElementById("color");

  if (numero > 0) {
    color.className = "verde";
  }else if (numero < 0) {
    color.className = "red";
  }else {
    color.className = "blue";
  }
})
