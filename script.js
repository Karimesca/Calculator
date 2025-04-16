function ecrire(n) {
    let zone = document.getElementById("zone");
    zone.textContent += n;
}

function effacerTout() {
    let zone = document.getElementById("zone");
    zone.textContent = "";
}

function calculer() {
    let zone = document.getElementById("zone");
    try {
        zone.textContent = eval(zone.textContent);
    } catch (err) {
        zone.textContent = "Erreur";
    }
}

function supprimer() {
    let zone = document.getElementById("zone");
    zone.textContent = zone.textContent.slice(0, -1); // Remove last character
}
