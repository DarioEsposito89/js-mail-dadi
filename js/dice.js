// LANCIO DADI---------------------------------------------------
const btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", function () {
        
    const userLaunch = Math.floor(Math.random() * 6) + 1;
    console.log("Risultato lancio del dado Utente:", userLaunch);
    document.getElementById("user").innerHTML = userLaunch;

    const pcLaunch = Math.floor(Math.random() * 6) + 1;
    console.log("Risultato lancio del dado Pc:", pcLaunch);
    document.getElementById("pc").innerHTML = pcLaunch;

    if (userLaunch > pcLaunch) {
        console.log("l'utente ha vinto")
    } else if (userLaunch === pcLaunch) {
        console.log("l'utente e il pc hanno pareggiato")
    } else {
        console.log("il pc ha vinto")
    }
})

const btnCancel = document.getElementById("cancel");
btnCancel.addEventListener("click", function () {
    // sparizione parametri Utente e Pc
    document.getElementById("user").value = "";
    document.getElementById("pc").value = "";
})

// Vince chi ha il numero più grande


