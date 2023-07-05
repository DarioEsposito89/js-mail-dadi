// LANCIO DADI---------------------------------------------------
const btnGenerateDice = document.getElementById("generate-dice");
btnGenerateDice.addEventListener("click", function () {
        
    const userLaunch = Math.floor(Math.random() * 6) + 1;
    console.log("Risultato lancio del dado Utente:", userLaunch);
    document.getElementById("user-dice").innerHTML = userLaunch;

    const pcLaunch = Math.floor(Math.random() * 6) + 1;
    console.log("Risultato lancio del dado Pc:", pcLaunch);
    document.getElementById("pc-dice").innerHTML = pcLaunch;

    if (userLaunch > pcLaunch) {
        console.log("l'utente ha vinto")
    } else if (userLaunch === pcLaunch) {
        console.log("l'utente e il pc hanno pareggiato")
    } else {
        console.log("il pc ha vinto")
    }
})

const btnCancelDice = document.getElementById("cancel-dice");
btnCancelDice.addEventListener("click", function () {
    // sparizione parametri Utente e Pc
    document.getElementById("user-dice").value = "";
    document.getElementById("pc-dice").value = "";
})

// Vince chi ha il numero più grande
const btnGenerateNumber = document.getElementById("generate-number");
btnGenerateNumber.addEventListener("click", function () {
        
    const userFirstNumber = document.getElementById("userfirstnumber").value;
    console.log("L'utente ha inserito come primo numero", userFirstNumber);

    const userSecondNumber = document.getElementById("usersecondnumber").value;
    console.log("L'utente ha inserito come secondo numero", userSecondNumber);

    const userThirdNumber = document.getElementById("userthirdnumber").value;
    console.log("L'utente ha inserito come terzo numero:", parseInt(userThirdNumber));

    const sommaNumbersUser = (parseInt(userFirstNumber) + parseInt(userSecondNumber) + parseInt(userThirdNumber));
    console.log("La somma dei numeri dell'utente:", parseInt(sommaNumbersUser));

    document.getElementById("user-number").innerHTML = sommaNumbersUser;

    const pcNumber1 = Math.floor(Math.random() * 10) + 1;
    console.log("Risultato random primo numero PC:", parseInt(pcNumber1));

    const pcNumber2 = Math.floor(Math.random() * 10) + 1;
    console.log("Risultato random secondo numero PC:", parseInt(pcNumber2));

    const pcNumber3 = Math.floor(Math.random() * 10) + 1;
    console.log("Risultato random terzo numero PC:", parseInt(pcNumber3));

    const sommaNumbersPc = pcNumber1 + pcNumber2 + pcNumber3;
    console.log("La somma dei numeri del Pc:", sommaNumbersPc);

    document.getElementById("user-number").innerHTML = sommaNumbersPc;


    if (sommaNumbersUser > sommaNumbersPc) {
        console.log("l'utente ha vinto")
    } else if (sommaNumbersUser === sommaNumbersPc) {
        console.log("l'utente e il pc hanno pareggiato")
    } else {
        console.log("il pc ha vinto")
    }
})

const btnCancelNumber = document.getElementById("cancel-number");
btnCancelNumber.addEventListener("click", function () {
    // sparizione parametri Utente e Pc
    document.getElementById("user-number").value = "";
    document.getElementById("pc-number").value = "";
})

