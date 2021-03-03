//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


var prima = prompt("Inserisci una parola");

var seconda = prompt("Inserisci un'altra parola");

var insieme = (prima, seconda);


if (prima.length > seconda.length) {
  console.log(seconda), console.log(prima);
} else (console.log(prima, seconda) );
