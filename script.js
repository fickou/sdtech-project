// Fonction pour l'interactivité
function showMessage() {
  document.getElementById("output").innerText =
    "Bienvenue chez SDTech 🚀 — L’innovation à portée de main.";
}

// Fonction utilitaire pour tests CI
function addition(a, b) {
  return a + b;
}

// Export pour Jest (Node.js uniquement)
if (typeof module !== "undefined") {
  module.exports = { addition };
}
