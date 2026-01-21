const sidebar_buttons = document.querySelectorAll(".sidebar-btn");
let current_page = "dashboard";

const params = new URLSearchParams(window.location.search);

if (params.has("page")) {
    current_page = params.get("page");
};

let page_container = document.getElementById("page-container")

page_container.src = current_page + ".html"
setActive(current_page);
page_container.focus();

sidebar_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        set_page(btn.textContent.trim().toLowerCase());
    });
});

function clearSelected() {
    sidebar_buttons.forEach(el => {
        el.classList.remove("sidebar-btn-active")
    })
}

function setActive(page) {
    sidebar_buttons.forEach(btn => {
        if (btn.textContent.trim().toLowerCase() == page) {
            btn.classList.add("sidebar-btn-active")
        }
    })
}

window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") ?? "dashboard";
    set_page(page);
});


function set_page(page) {
    clearSelected();
    setActive(page);
    page_container.src = page + ".html"
    current_page = page

    const params = new URLSearchParams(window.location.search);
    params.set("page", page);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.pushState({}, "", newUrl);
    page_container.focus();
}