const baseURL = "https://anzehlat.github.io/wdd230/";

const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();

        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("activityLinks");

    weeks.forEach(week => {
        const weekElement = document.createElement("li");
        weekElement.textContent = week.week;

        const linksList = document.createElement("ul");
        week.links.forEach(link => {
            const linkElement = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;

            linkElement.appendChild(anchor);
            linksList.appendChild(linkElement);
        });

        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}

window.addEventListener("load", getLinks);
