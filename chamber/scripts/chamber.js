document.getElementById('lastModified').innerText = new Date(document.lastModified).toLocaleString();
const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;

const hamburgerButton = document.getElementById('hamburgerButton');
const navElement = document.querySelector('.menuLinks');

hamburgerButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});
