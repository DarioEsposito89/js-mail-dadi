const listaEmail = ["mariorossi@gmail.com", "giuseppeverdi@gmail.com", "vittoriobianchi@gmail.com"]
console.log(listaEmail)

let emailTrovata = false;

const btnVerifica = document.getElementById("verifica");

btnVerifica.addEventListener("click", function () {

    let emailInseritaUtente = document.forms['cercamail'].email.value;
    
    for (let i = 0; i < listaEmail.length; i++) {
        console.log(i);
        listaEmail[i];
        console.log(listaEmail[i]);
        let emailInseritaUtente = listaEmail[i];

        if (emailInseritaUtente === listaEmail[i]) {
            emailTrovata === true;
        }   else {
            emailTrovata === false;
        }

        if (emailTrovata === true) {
            console.log("L'email inserita è presente nell'archivio");
        } else {
            console.log("L'email non è presente nell'archivio");
        }
    }
})