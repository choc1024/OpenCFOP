const main_page = window.parent

const timer_settings = main_page.get_data("settings").timer

console.log(timer_settings)


const timer = document.getElementById("timer-counter")

let spaceDownTime = null;
let spaceHeld = false;

let inspecting = false

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !spaceHeld) {
        spaceHeld = true;
        spaceDownTime = performance.now();
        setTimeout(() => {
            timer.style.color = "green"
        }, 1000);

    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        const heldTime = performance.now() - spaceDownTime;
        spaceHeld = false;

        if (heldTime >= 1000) {
            if (timer_settings.wca_inspection === true && inspecting === false) {
                inspecting = true

            }
        }
    }
});
