function changerPage(event) {
    let first = document.querySelector("[id='1']");
    let second = document.querySelector("[id='2']");

    if (getComputedStyle(second).display === "none") {
        second.style.display = "flex";
        first.style.display = "none";

        changerButton();
    } else {
        first.style.display = "flex";
        second.style.display = "none";

        changerButton();
    }

}

function changerButton() {
    let buttons = document.querySelectorAll("form > div:last-child > button");

    let i = 0;
    let arr = [];
    for(let button of buttons) {
        arr[i] = button;
        i++;
    }
    buttons = arr;

    let enabledButtons = buttons.filter((elem) => {
        if (getComputedStyle(elem).display === "none") {
            return true;
        } else {
            return false;
        }
    });

    let disabledButtons = buttons.filter(elem => {
        if (getComputedStyle(elem).display === "flex") {
            return true;
        } else {
            return false;
        }
    })

    enabledButtons.forEach(elem => {
        elem.style.display = "flex";
    });

    disabledButtons.forEach(elem => {
        elem.style.display = "none";
    })

}

function redirector(link) {
    window.location.href = link;
}

// вы хотите потратитть души на трудолюбие -------------------------------------------

document.querySelectorAll("form > div:last-child > button[type='button']").forEach(elem => {
    elem.addEventListener("click", changerPage);
})

document.querySelector("form").addEventListener("submit", () => redirector("finished.html"))