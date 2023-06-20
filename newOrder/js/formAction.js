function handlerPageForm(to) {
    // numPage
    // processLine
    pages = document.querySelector("#testPages").children;

    let current = document.querySelector("#testPages > :not([hidden])");

    if (to === "forward") {
        current.setAttribute("hidden", "");

        let next = document.getElementById(`${(+current.getAttribute("id") === pages.length)
                ? 1
                : +current.getAttribute("id") + 1}`);

        next.removeAttribute("hidden");

        changerProcessLine(+next.getAttribute("id"));
        changerNumPage( +next.getAttribute("id") );

    } else if (to === "back") {
        current.setAttribute("hidden", "");

        let prev = document.getElementById(`${(+current.getAttribute("id") === 1)
                ? 1
                : +current.getAttribute("id") - 1
            }`);

        prev.removeAttribute("hidden");

        changerProcessLine(+prev.getAttribute("id"));
        changerNumPage(+prev.getAttribute("id"));
    }

    
}

function changerNumPage(numPage) {
    elem = document.querySelector("#numPage");

    elem.innerHTML = `${numPage}/6`;
}

function changerProcessLine(numPage) {
    elem = document.querySelector("#processLine");

    // elem.classList.remove(`col-span-1`);
    elem.style.cssText = `grid-column: span ${numPage - 1} / span ${numPage - 1};`
}