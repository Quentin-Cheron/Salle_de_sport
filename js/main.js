{
const display = document.querySelectorAll(".about tr");
const loader = document.querySelector(".Loader");
const form = document.querySelector(".info");
const next = document.querySelector("#next");
let em = document.querySelector("em");
const error = document.querySelector(".alert");
const table = document.querySelectorAll("table");
console.log(display)

function visible () {

  if (!error.classList.contains("totalAlertFLex")) {
    this.classList.toggle("selected");
  }
  if (display) {
    loader.classList.replace("Loader", ["LoaderFlex"]);
  }
//Scroll vers le bas

window.scrollTo(0, document.body.scrollHeight);

//Affichage Des dates des horaires et du point de rendez-vous

  if (this.parentElement.parentElement.children[0].textContent == "Réserver votre place pour le prochain cours") {
   totalLocal.innerHTML = table[0].children[1].textContent;
  } else {
   totalLocal.innerHTML = this.parentElement.parentElement.children[0].textContent;
  }
  totalHeure.innerHTML = this.children[1].textContent;
  totalDate.innerHTML = this.children[0].textContent;

  if (this.classList.contains("selected")) {
    em.innerHTML = length++;
    error.classList.replace("totalAlertFlex", "totalAlert"); 
  } else if (!this.classList.contains("selected")) {
    error.classList.replace("totalAlert", "totalAlertFlex");
    this.classList.add("noSelected");
    this.classList.toggle("selected");
  } 
}

//Affichage du formulaire

function formulaire () {
  form.classList.toggle("info");
}

for (let i = 0; i < display.length; i++) {
    display[i].addEventListener("click", visible);
    
}
next.addEventListener("click", formulaire);

em.innerHTML = length++;
}

