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

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

document.addEventListener('DOMContentLoaded', function () {
    // Set current timestamp in the hidden field
    const timestampField = document.getElementById('timestamp');
    const currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
});

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

document.addEventListener("DOMContentLoaded", function () {
  const membersContainer = document.getElementById("membersContainer");
  const gridView = document.getElementById("gridView");
  const listView = document.getElementById("listView");

  fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
      displayMembers(data.members);

      gridView.addEventListener("change", () => {
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
      });

      listView.addEventListener("change", () => {
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
      });
    })
    .catch(error => console.error('Error loading members data:', error));

  function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
      const memberElement = document.createElement("div");
      memberElement.classList.add(membersContainer.classList.contains("grid-view") ? "member-card" : "member-list-item");

      memberElement.innerHTML = `
        <img src="data/images/${member.image}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membership_level}</p>
        <p>${member.additional_info}</p>
      `;

      membersContainer.appendChild(memberElement);
    });
  }
});
