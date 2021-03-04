//con raffa in code review

var numero = prompt("Dammi un numero");
console.log(numero);

var somma = 0;

for (var i = 0; i < numero.length; i++) {
  somma += parseInt(numero[i]);
}
