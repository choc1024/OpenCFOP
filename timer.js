const main_page = window.parent

const timer_settings = main_page.get_data("settings").timer

console.log(timer_settings)


const timer = document.getElementById("timer-counter")

let spaceDownTime = null;
let spaceHeld = false;

let inspecting = false


let holdTimeout = null;

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !spaceHeld) {
        e.preventDefault();
        spaceHeld = true;
        spaceDownTime = performance.now();

        holdTimeout = setTimeout(() => {
            timer.style.color = "green";
        }, 1000);
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        clearTimeout(holdTimeout);
        holdTimeout = null;
        spaceHeld = false;
        timer.style.color = "white";
    }
});
