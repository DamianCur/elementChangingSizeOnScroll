document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);
let size = 10;
let grow = true;


div.style.width = "100%";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.backgroundColor = "green";
div.style.height = size + "px";

const changeHeight = function () {


    if (grow) {
        size += 10;
        div.style.height = size + "px";
        div.style.backgroundColor = "green";
    } else {
        size -= 10;
        div.style.height = size + "px";
        div.style.backgroundColor = "brown";
    }

    if (size >= window.innerHeight / 2) {
        grow = false
    } else if (size === 10) {
        grow = true
    }
}

window.addEventListener("scroll", changeHeight);