// не используется
function pageChanger(link, isFirst) {
    if (isFirst === false) {
        // сменить стиль для ссылки текущей страницы страницы(которая была)
        let otherLink = document.querySelector("nav").querySelector("[disabled]");

        otherLink.classList.toggle("currentPage");
        otherLink.removeAttribute("disabled");
    }

    // сменить стиль для ссылки следующей страницы(на которую нажали)
    link.classList.toggle("currentPage");
    // добавить атрибут disabled
    link.setAttribute("disabled", "");

    if (isFirst === false) {
        // найти текущую страницу (та, на которой нет атрибута hidden)
        currentPage = document.querySelector(".cont > div:not([hidden])")
    }

    // найти страницу, на которую переходим (получить от атрибута ссылки dataset.link)
    nextPage = document.querySelector(".cont").querySelector(`#${link.dataset.link}`);

    if (isFirst === false) {
        // добавляем атриибут hidden на текущую страницу
        currentPage.setAttribute("hidden", "");
    }

    // удаляем его у другой
    nextPage.removeAttribute("hidden");

    // получить текст для тайтла из атрибута следующей страницы
    let text = nextPage.dataset.title;
    // сменить title titleChanger(text)
    titleChanger(text);

}

// не используется
function attachinglinks(link) {
    if (!link.getAttribute("data-link")) {
        return;
    }

    let fileName = link.getAttribute("data-link");
    link.setAttribute("href", `${fileName}.html`)
}

function titleChanger(text) {
    // найти title
    let title = document.querySelector("title");
    // изменить innerHTML у тега title
    title.innerHTML = text;
}

// не используется
function toggleTemplateElem() {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    if (header.hasAttribute("hidden") === false) {
        header.setAttribute("hidden", "");
        footer.setAttribute("hidden", "");
    } else {
        header.removeAttribute("hidden");
        footer.removeAttribute("hidden");
    }

}

// глобальный код -------------------------------------------------------------
// document.querySelectorAll("a").forEach(elem => {
//     attachinglinks(elem);
// })

// document.querySelector("nav > button[data-link='test']").addEventListener('click', toggleTemplateElem);

let page = document.querySelector(".cont > div").getAttribute("id");

pageChanger(document.querySelector(`nav > [data-link='${page}']`), true);

