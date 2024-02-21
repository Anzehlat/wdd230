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
                <div class="member-info-container">
                    <img src="data/images/${member.image}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.additional_info}</p>
                </div>
            `;

            membersContainer.appendChild(memberElement);
        });
    }
});
