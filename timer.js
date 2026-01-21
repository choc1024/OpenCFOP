const main_page = window.parent
console.log("timer.js running on:", window.location.pathname);

const timer_settings = main_page.get_data("settings").timer

console.log(timer_settings)


const timer = document.getElementById("timer-counter")

let spaceDownTime = null;
let spaceHeld = false;

let inspecting = false

let timing = false

let holdTimeout = null;

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !spaceHeld) {
        e.preventDefault();
        if (inspecting) {
          inspecting = false;
          timing = true;
        }

        if (timing) {
          timing = false;
        }
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

        if (performance.now() - spaceDownTime >= 1000) {
            if (timer_settings.wca_inspection && !timing) {
                inspecting = true
                startInspection();
            } else {
                timing = true
                startTiming();
            }
        }
    }
});



function startInspection() {
  timer.textContent = "0.000";
  const start = performance.now();

  const interval = setInterval(() => {
    if (!inspecting) {
      clearInterval(interval);
      return;
    }

    const elapsed = performance.now() - start;
    timer.textContent = (elapsed / 1000).toFixed(3);
  }, 1);
}

function startTiming() {
  timer.textContent = "0.000";
  const start = performance.now();

  const interval = setInterval(() => {
    if (!timing) {
      clearInterval(interval);
      return;
    }

    const elapsed = performance.now() - start;
    timer.textContent = (elapsed / 1000).toFixed(3);
  }, 1);
}
