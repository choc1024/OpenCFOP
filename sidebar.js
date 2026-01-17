let current_page = "dashboard";

const params = new URLSearchParams(window.location.search);

if (params.has("page")) {
    current_page = params.get("page");
};

let page_container = document.getElementById("page-container")

page_container.src = current_page + ".html"


const sidebar_buttons = document.querySelectorAll(".sidebar-btn");

sidebar_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        set_page(btn.textContent.trim().toLowerCase());
    });
});

window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") ?? "dashboard";
    set_page(page);
});


function set_page(page) {
    page_container.src = page + ".html"
    current_page = page

    const params = new URLSearchParams(window.location.search);
    params.set("page", page);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.pushState({}, "", newUrl);

}