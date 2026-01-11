const buttons = document.querySelectorAll(".sidebar-button");
const views = document.querySelectorAll(".view");

function switchView(viewName) {
    // update views
    views.forEach(view => {
        view.classList.toggle(
            "active",
            view.id === `view-${viewName}`
        );
    });

    // update sidebar buttons
    buttons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.view === viewName
        );
    });

    // optional: remember last view
    localStorage.setItem("opencfop:view", viewName);
}

// click handling
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switchView(button.dataset.view);
    });
});

// restore last view on reload
const savedView = localStorage.getItem("opencfop:view");
if (savedView) {
    switchView(savedView);
}
