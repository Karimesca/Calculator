function ecrire(n) {
    let zone = document.getElementById("zone");
    zone.textContent += n;
}

function supprimer() {
    let zone = document.getElementById("zone");
    zone.textContent = zone.textContent.slice(0, -1); // Remove last character
}

function effacerTout() {
    let zone = document.getElementById("zone");
    zone.textContent = ""; // Clear the entire display
}

function calculer() {
    let zone = document.getElementById("zone");
    let expression = zone.textContent;

    // Check for division by zero using regex
    const divisionByZeroPattern = /\/\s*0/;
    if (divisionByZeroPattern.test(expression)) {
        zone.textContent = "Erreur: Division par zéro"; // Display error message
        return;
    }

    try {
        zone.textContent = eval(expression);
    } catch (err) {
        zone.textContent = "Erreur"; // Display generic error message
    }
}
