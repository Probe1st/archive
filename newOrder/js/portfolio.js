function showMore(Event) {
    document.querySelectorAll(".portfolio > a[hidden]").forEach(elem => {
        elem.removeAttribute('hidden');
    })
    Event.currentTarget.style.display = "none";
}


// глобальный код ----------------------------------

document.querySelector(".portfolio + button").addEventListener("click", showMore)
