function menu() {
    if (window.matchMedia("(max-width: 496px)").matches) {
        document.getElementById("b-accueil").innerHTML = "";
        document.getElementById("b-propos").innerHTML = "";
        document.getElementById("b-projets").innerHTML = "";
    }
}

menu();
