var vuoto = [];
console.log(vuoto);

for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero")
  if (numero%2 == 1) {
    vuoto.push(numero)
  }
}

console.log(vuoto);
