let slidersParent = document.querySelectorAll(`[data-slider]`);

for(let i = 1; i < slidersParent.length; i++) {
    document.querySelector(`[data-slider='${i}']`).oninput = function() {
        slider
    };
}

function slider(parentElem) {
    console.log(parentElem)
    let value = parentElem.querySelector(".slider").getAttribute("value");
    let step = parentElem.querySelector(".slider").getAttribute("step");

    console.log(`value: ${value}; step: ${step}; min: ${+parentElem.querySelector(".slider").getAttribute("min")}`)
    let pos = (value / step) - +parentElem.querySelector(".slider").getAttribute("min");

    let sliderTitle = parentElem.querySelector(".sliderTitle");

    changeTitle(pos, value, sliderTitle);
}

function changeTitle(pos, value, sliderTitle) {
    let text = sliderTitle.querySelector("p");
    
    text.innerHTML = value;
    sliderTitle.style.cssText = `grid-column-start: ${pos}`;
}