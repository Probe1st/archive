function changeTitle(e) {
    if(e.type === "range") {
        let title = e.closest("label").querySelector("p");
    
        title.innerHTML = e.value;
    }else {
        let title = e.currentTarget.closest("label").querySelector("p");
    
        title.innerHTML = e.currentTarget.value;
    }
}

// Глобальный код -------------------------------------------------
let sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(elem => elem.addEventListener("input", changeTitle));
sliders.forEach(elem => changeTitle(elem))