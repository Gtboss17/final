// === Check login status if this page requires authentication ===
function checkUserAuth() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        alert("You'll need to sign in to access this page.");
        window.location.href = "login.html";
    }
}

// Only run this if the body tag has the class "requires-login"
if (document.body.classList.contains("requires-login")) {
    checkUserAuth();
}

// === Navbar: show logged-in user or login link ===
document.addEventListener("DOMContentLoaded", () => {
    const authLinks = document.getElementById("auth-links");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (authLinks) {
        if (currentUser && currentUser.username) {
            authLinks.innerHTML = `
                <li class="nav-item"><span class="nav-link disabled">Welcome, ${currentUser.username}</span></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="logout()">Sign Out</a></li>
            `;
        } else {
            authLinks.innerHTML = `
                <li class="nav-item"><a class="nav-link" href="login.html">Sign In</a></li>
            `;
        }
    }
});

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

// === Itinerary management ===
let itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

function addToItinerary(place) {
    if (!itinerary.includes(place)) {
        itinerary.push(place);
        localStorage.setItem('itinerary', JSON.stringify(itinerary));
        loadItinerary();
        alert(`${place} added to your itinerary.`);
    } else {
        alert(`${place} is already in your itinerary.`);
    }
}

function loadItinerary() {
    const list = document.getElementById("itinerary-list");
    if (!list) return;

    list.innerHTML = "";

    if (itinerary.length === 0) {
        const emptyMsg = document.createElement("li");
        emptyMsg.className = "list-group-item";
        emptyMsg.textContent = "Your itinerary is currently empty.";
        list.appendChild(emptyMsg);
        return;
    }

    itinerary.forEach((place, index) => {
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";

        const placeText = document.createElement("span");
        placeText.textContent = `${index + 1}. ${place}`;
        item.appendChild(placeText);

        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-danger btn-sm";
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => {
            itinerary.splice(index, 1);
            localStorage.setItem('itinerary', JSON.stringify(itinerary));
            loadItinerary();
        };

        item.appendChild(removeBtn);
        list.appendChild(item);
    });
}

function confirmItinerary() {
    if (itinerary.length === 0) {
        alert("Your itinerary is empty. Add a few attractions first.");
        return;
    }

    const msg = document.getElementById("confirmation-message");
    if (msg) {
        msg.textContent = "Great! Your itinerary has been booked.";
    }
}

// === Suggested Attractions (Itinerary Page) ===
function loadRecommendations() {
    const container = document.getElementById("recommendations");
    if (!container || typeof attractions === "undefined") return;

    const featured = attractions.slice(0, 8);

    featured.forEach((item, index) => {
        const col = document.createElement("div");
        col.className = "col-md-6 mb-3";

        const wrapper = document.createElement("div");
        wrapper.className = "d-flex justify-content-between align-items-center border p-2 rounded";

        const left = document.createElement("div");
        left.innerHTML = `<strong>${index + 1}. ${item.name}</strong><br><a href="#" class="learn-more" data-index="${index}">Learn more</a>`;

        const right = document.createElement("button");
        right.className = "btn btn-outline-primary btn-sm";
        right.textContent = "Add";
        right.onclick = () => addToItinerary(item.name);

        wrapper.appendChild(left);
        wrapper.appendChild(right);
        col.appendChild(wrapper);
        container.appendChild(col);
    });

    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("learn-more")) {
            e.preventDefault();
            const idx = parseInt(e.target.getAttribute("data-index"));
            const data = attractions[idx];

            document.getElementById("detailsModalLabel").textContent = data.name;
            document.getElementById("detailsModalBody").innerHTML = `
                <p><strong>Category:</strong> ${data.category}</p>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Price:</strong> £${data.price}</p>
                <p><strong>Distance:</strong> ${data.distance} km</p>
                <p><strong>Popularity:</strong> ${data.popularity} / 5</p>
                <a href="${data.link}" target="_blank">Official Link</a>
            `;
            new bootstrap.Modal(document.getElementById("detailsModal")).show();
        }
    });
}

// === Search filter logic ===
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".attraction-card");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const name = card.getAttribute("data-name").toLowerCase();
                card.style.display = name.includes(searchTerm) ? "block" : "none";
            });
        });
    }
});