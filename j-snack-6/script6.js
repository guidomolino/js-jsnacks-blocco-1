var invia = document.getElementById("invia");

invia.addEventListener("click", function () {

  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operatore = document.getElementById("operatore").value;
  var result;

  if (operatore === "somma") {
    result = num1 + num2;
  }else if (operatore === "sottrai") {
    result = num1 - num2;
  }else if (operatore === "moltiplica") {
    result = num1 * num2;
  }else if (operatore === "dividi"){
    if (num2 == 0) {
      result = "Non divisibile per 0";
    } else {
      result = num1 / num2;
    }
  }

  document.getElementById("result").innerHTML = result;

})
