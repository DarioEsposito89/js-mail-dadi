const listaEmail = ["mariorossi@gmail.com", "giuseppeverdi@gmail.com", "vittoriobianchi@gmail.com"]
console.log(listaEmail)

const emailInseritaUtente = document.getElementById("email").value;

let emailTrovata = false;

const btnVerifica = document.getElementById("verifica");
btnVerifica.addEventListener("click", function () {
    
    emailTrovata = false;
    for (let i = 0; i < listaEmail.length; i++) {
        console.log(i);
        console.log(listaEmail[i]);
        const currentEmail = listaEmail[i];
        if (emailInseritaUtente === currentEmail) {
            emailTrovata === true;
        } 
    }

    if (emailTrovata === true) {
        console.log("L'email inserita è presente nell'archivio");
        document.getElementById("risultato").innerHTML = ("L'email inserita è presente nell'archivio")
    } else {
        console.log("L'email NON è presente nell'archivio");
        document.getElementById("risultato").innerHTML = ("L'email inserita NON è presente nell'archivio")
    }
})