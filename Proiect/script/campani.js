document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const campaignCards = document.querySelectorAll(".campaign-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Elimină clasa activă de la toate tab-urile
            tabs.forEach(t => t.classList.remove("active"));
            
            // Adaugă clasa activă la tab-ul curent
            this.classList.add("active");
            
            // Filtrare campanii
            const filter = this.getAttribute("data-filter");
            campaignCards.forEach(card => {
                if (filter === "toate" || card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Configurator interactiv
    document.getElementById("start-configurator").addEventListener("click", function () {
        alert("Configuratorul interactiv este în dezvoltare!");
    });
});