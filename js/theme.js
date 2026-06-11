const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-theme"
    );

    document.body.classList.toggle(
        "dark-theme"
    );

    const isDark =
    document.body.classList.contains(
        "dark-theme"
    );

    themeToggle.innerHTML =
    isDark ? "☀" : "🌙";

});