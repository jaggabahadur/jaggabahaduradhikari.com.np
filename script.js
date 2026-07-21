function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode") ? "on" : "off"
    );
}

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
}

const searchBox = document.querySelector(".search-box");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const query = searchBox.value.trim().toLowerCase();
        const cards = document.querySelectorAll(".features .card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? "" : "none";
        });
    });
}
