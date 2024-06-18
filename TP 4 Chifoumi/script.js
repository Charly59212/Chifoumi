// Variables de stockage des scores 
let totalJoueur = 0;
let totalOrdi = 0;

// Variables pour l'historique des jeux
let gagnant = 0;
let perdant = 0;

// Sélection des éléments du DOM
const scoreJoueur = document.getElementById("scoreJoueur");
const scoreOrdi = document.getElementById("scoreOrdi");
const resultat = document.getElementById("resultat");
const pierre = document.getElementById("pierre");
const papier = document.getElementById("papier");
const ciseaux = document.getElementById("ciseaux");
const totalGagne = document.getElementById("totalGagne");
const totalPerdu = document.getElementById("totalPerdu");

// Fonction pour les écouteurs d'événements
function menu() {
    pierre.addEventListener('click', function() {
        jeu("pierre"); // Lance le jeu avec le choix "pierre"
    });

    papier.addEventListener('click', function() {
        jeu("papier"); // Lance le jeu avec le choix "papier"
    });

    ciseaux.addEventListener('click', function() {
        jeu("ciseaux"); // Lance le jeu avec le choix "ciseaux"
    });
}

// Fonction pour le choix de manière aléatoire
function choixOrdiAleatoire() {
    const choixAleatoire = ['pierre', 'papier', 'ciseaux']; // Variable des choix possibles
    const nombreAleatoire = Math.floor(Math.random() * 3); // Variable pour le choix aléatoire 
    return choixAleatoire[nombreAleatoire]; // Choix du nombre aléatoire
}

// Fonction pour gérer le résultat
function jeu(choixJoueur) {
    const choixOrdi = choixOrdiAleatoire(); // Obtenir le choix de l'ordinateur
    switch (choixJoueur + choixOrdi) {
        case "pierreciseaux":
        case "papierpierre":
        case "ciseauxpapier":
            gagne(choixJoueur, choixOrdi); // L'utilisateur gagne
            break;
        case "pierrepapier":
        case "papierciseaux":
        case "ciseauxpierre":
            perdu(choixJoueur, choixOrdi); // L'utilisateur perd
            break;
        default:
            egalite(choixJoueur, choixOrdi); // Égalité
            break;
    }
}

// Condition pour retouner le choix de l'utilisateur
function AffichageTexte(condition) {
    if (condition === "pierre") return "Pierre"; // Si le choix est "pierre", retourner "Pierre"
    if (condition === "papier") return "Papier"; // Si le choix est "papier", retourner "Papier"
    return "Ciseaux"; // Si le choix est "ciseaux", retourner "Ciseaux"
}

// Fonction lorsque l'utilisateur gagne
function gagne(choixJoueur, choixOrdi) {
    totalJoueur++; // Augmente le score de l'utilisateur d'1 point
    scoreJoueur.textContent = "\n" + totalJoueur; // Mettre à jour l'affichage du score de l'utilisateur
    scoreOrdi.textContent = "\n" + totalOrdi; // Mettre à jour l'affichage du score de l'ordinateur
    resultat.textContent = `${AffichageTexte(choixJoueur)} bat ${AffichageTexte(choixOrdi)}. Gagné !`; // Message de victoire
    gagnant++; // Victoire supplémentaire pour l'utilisateur
    affichageUpdate(); // Mise à jour l'affichage de l'historique du jeu
    if (totalJoueur === 10) {  // Termine le match si l'utilisateur a atteint un score de 10
        alert("Félicitations ! Vous avez gagné !");
        newGame(); // Réinitialiser le jeu
    }
}

// Fonction lorsque l'utilisateur perd
function perdu(choixJoueur, choixOrdi) {
    totalOrdi++; // Augmente le score de l'ordinateur d'1 point
    scoreJoueur.textContent = "\n" + totalJoueur; // Mettre à jour l'affichage du score de l'utilisateur
    scoreOrdi.textContent = "\n" + totalOrdi; // Mettre à jour l'affichage du score de l'ordinateur
    resultat.textContent = `${AffichageTexte(choixOrdi)} bat ${AffichageTexte(choixJoueur)}. Perdu !`; // Message de défaite
    perdant++; // Victoire supplémentaire pour l'ordinateur
    affichageUpdate(); // Mise à jour l'affichage de l'historique du jeu

    if (totalOrdi === 10) {  // Termine le match si l'ordinateur a atteint un score de 10
        alert("L'ordinateur a gagné !");
        newGame(); // Réinitialiser le jeu
    }
}

// Fonction lorsqu'il y a une égalité
function egalite(choixJoueur, choixOrdi) {
    resultat.textContent = `${AffichageTexte(choixJoueur)} égal à ${AffichageTexte(choixOrdi)}. Egalité !`; // Message d'égalité
}

// Fonction pour mettre à jour l'historique des jeux
function affichageUpdate() {
    totalGagne.textContent = gagnant; // Mise à jour de l'affichage des victoires
    totalPerdu.textContent = perdant; // Mise à jour de l'affichage des défaites
}

// Fonction pour réinitialiser le jeu
function newGame() {
    totalJoueur = 0; // Réinitialiser le score de l'utilisateur à zéro
    totalOrdi = 0; // Réinitialiser le score de l'ordinateur à zéro
    scoreJoueur.textContent = "\n" + totalJoueur; // Mettre à jour l'affichage du score de l'utilisateur
    scoreOrdi.textContent = "\n" + totalOrdi; // Mettre à jour l'affichage du score de l'ordinateur
    resultat.textContent = "Nouvelle partie !"; // Affiche le message de lancement d'une nouvelle partie
    affichageUpdate(); // Mise à jour de l'affichage de l'historique
}

// Initialisation du jeu
menu(); // Redémarre le jeu