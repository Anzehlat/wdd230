const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;

const hamburgerButton = document.getElementById('hamburgerButton');
const navElement = document.querySelector('.menuLinks');

hamburgerButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    main.classList.toggle('dark-mode');
    
    if (modeButton.textContent.includes("🕶️")) {
        modeButton.textContent = "🔆";
    } else {
        modeButton.textContent = "🕶️";
    }
});
