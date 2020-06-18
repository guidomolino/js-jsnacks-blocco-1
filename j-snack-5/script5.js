
invia.addEventListener("click", function () {

  var max = 10;
  var min = 1;
  var numero = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(numero);
  document.getElementById("sel").classList.add("pari", "dispari");

  if ((numero%2)) {
    document.getElementById("sel").classList.remove("pari");
  }else if (!(numero%2)) {
    document.getElementById("sel").classList.remove("dispari");
  }
})
