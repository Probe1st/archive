function hoverAction(event) {
    if(event.type === "mouseover") {
        let elem = event.currentTarget.querySelector("div");

        elem.style.display = "flex";
    }else if(event.type === "mouseout") {
        let elem = event.currentTarget.querySelector("div");

        elem.style.display = "none";
    }

}

// глобальный код ------------------------------------------------------------

document.querySelectorAll(".portfolio > a > div").forEach((elem) => {
    elem.addEventListener("mouseover", hoverAction);
});

document.querySelectorAll(".portfolio > a > div").forEach((elem) => {
    elem.addEventListener("mouseout", hoverAction);
});