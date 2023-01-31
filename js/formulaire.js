{
    const tr = document.querySelectorAll(".about tr");
    const em = document.querySelector("em");
    const loader = document.querySelector(".Loader");
    const info = document.querySelector(".info");
    const next = document.querySelector("#next");
    const table = document.querySelectorAll("table");
    const error = document.querySelector(".alert");
    const totalLocal = document.getElementById("totalLocal");
    const totalHeure = document.getElementById("totalHeure");
    const totalDate = document.getElementById("totalDate");
    const i = document.querySelector(".pluriel");
    
    function visible () {
        loader.classList.replace("Loader", ["LoaderFLex"]);
        this.classList.toggle("selected");
    
        window.scrollTo(0, document.body.scrollHeight);
    
        

        if (this.parentElement.parentElement.children[0].textContent == "Réserver votre place pour le prochain cours" && this.classList.contains("selected")) {
            totalLocal.insertAdjacentHTML('afterbegin', `<td id="totalLocal"><ul>${table[0].children[1].children[0].textContent}</ul></td>`);
            totalDate.insertAdjacentHTML('afterbegin', `<ul>${this.children[0].textContent}</ul>`);
            totalHeure.insertAdjacentHTML('afterbegin', `<ul>${this.children[1].textContent}</ul>`);
        } else if (this.parentElement.parentElement.children[0].textContent != "Réserver votre place pour le prochain cours" && this.classList.contains("selected")){
            totalLocal.insertAdjacentHTML('afterbegin', `<td id="totalLocal"><ul>${this.parentElement.parentElement.children[0].textContent}</ul></td>`);
            totalDate.insertAdjacentHTML('afterbegin', `<ul>${this.children[0].textContent}</ul>`);
            totalHeure.insertAdjacentHTML('afterbegin', `<ul>${this.children[1].textContent}</ul>`);
        }
    
        if (this.classList.contains("selected")) {
            em.innerHTML = length++;
            error.classList.replace("totalAlertFlex", ["totalAlert"]);
        } else if (!this.classList.contains("selected")) {
            this.classList.add("noSelected");
            error.classList.replace("totalAlert", ["totalAlertFlex"]);
            this.classList.toggle("selected");
        }
        if (em.textContent == 2) {
            i.innerHTML = "créneaux";
        }
    }
    
    function form () {
        info.classList.toggle("info");
    }
    
    for (let i = 0; i < tr.length; i++) {
        tr[i].addEventListener("click", visible);
    }
    
    next.addEventListener("click", form);
    
    
    em.innerHTML = length++;
    }