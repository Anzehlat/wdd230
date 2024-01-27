document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
      img.innerHTML = `<img src="" data-src="${img.dataset.src}" alt="${img.dataset.caption}">`;
    });
  
    const visitMessage = document.getElementById('visitMessage');
    const visitCount = localStorage.getItem('visitCount');
    const lastVisit = localStorage.getItem('lastVisit');
  
    if (visitCount === null) {
      visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      const currentTime = Date.now();
      const timeDifference = currentTime - lastVisit;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      if (daysDifference === 0) {
        visitMessage.textContent = 'Back so soon! Awesome!';
      } else {
        const dayPlural = daysDifference === 1 ? 'day' : 'days';
        visitMessage.textContent = `You last visited ${daysDifference} ${dayPlural} ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', Date.now());
  });  

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const hamburgerButton = document.getElementById('hamburgerButton');
const navElement = document.querySelector('.menuLinks');

hamburgerButton.addEventListener('click', () => {
    console.log('Hamburger button clicked');
    navElement.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});