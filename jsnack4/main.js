var invitati = ["pippo", "pluto", "topolino"]
console.log(invitati);

var domanda = prompt("Qual è il tuo nome?")
console.log(domanda);

var invito = false;

for (var i = 0; i < invitati.length; i++) {
 if (invitati[i] === domanda){
    invito = true;
 }
}


  if (invito === false) {
    console.log("Mi dispiace, non puoi entrare!")
  } else console.log("Prego, accomodati!")
