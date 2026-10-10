let mainMenu = document.getElementById("mainMenu");
let nav = document.getElementById("nav");
let menuBtn = document.getElementById("menuBtn");

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle("active");
    nav.classList.toggle("active");

    if (mainMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "menu"
    }
});

document.getElementById("year").textContent = new Date().getFullYear();