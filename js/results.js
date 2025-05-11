// Get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category'),
        filter: params.get('filter')
    };
}

// Format helpers
function formatPrice(price) {
    return price === 0 ? "Free entry (donations welcome)" : `Tickets from £${price}`;
}

function formatDistance(km) {
    return km === 0 ? "0 km (Central Point)" : `${km} km (${Math.round(km * 12)} min walk)`;
}

function formatStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Render results based on category + filter
function renderResults(category, filter) {
    const heading = document.getElementById("results-heading");
    const container = document.getElementById("results-container");

    if (!category || !filter) {
        heading.textContent = "Missing category or filter in URL.";
        return;
    }

    heading.textContent = `Results for: ${category} by ${filter}`;
    container.innerHTML = ""; // Clear any old content

    let filtered = attractions.filter(item => item.category === category);

    if (filter === "Price") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (filter === "Distance") {
        filtered.sort((a, b) => a.distance - b.distance);
    } else if (filter === "Popularity") {
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    filtered.forEach((item, index) => {
        const col = document.createElement("div");
        col.className = "col-md-12 mb-4";

        let extraInfo = "";
        if (filter === "Price") {
            extraInfo = formatPrice(item.price);
        } else if (filter === "Distance") {
            extraInfo = formatDistance(item.distance);
        } else if (filter === "Popularity") {
            extraInfo = `
                <span class="text-warning fs-5">${formatStars(item.rating)}</span><br>
                <small>${item.popularityDescription}</small>
            `;
        }

        col.innerHTML = `
            <div class="card d-flex flex-row">
                <img src="${item.image}" alt="${item.name}" class="card-img-left" style="width: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}. ${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text text-muted">${extraInfo}</p>
                    <a href="${item.link}" class="btn btn-link" target="_blank">More Information</a>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// Start the rendering on page load
document.addEventListener("DOMContentLoaded", () => {
    const { category, filter } = getQueryParams();
    renderResults(category, filter);
});