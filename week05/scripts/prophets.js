const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data); 
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const deathDate = document.createElement('p');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
    deathDate.textContent = `Death: ${prophet.death}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '250');
    portrait.setAttribute('height', '300'); 

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(deathDate);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();
