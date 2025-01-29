document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('main-body');
    function divMaker(masina) {
        const div = document.createElement("div");
        div.classList.add("masina");

        div.innerHTML = `
            <img src="../imagini/modeleMasini/${masina.Poze}" alt="${masina.Model}">
            <div class="masina-info" id="${masina.ID}">
                <h3>${masina.Firma} ${masina.Model}</h3>
                <p class="pret">${masina.Pret} RON</p>
                <div class="buttonDirect">
                    <button onclick="window.location.href='vizualizareModel.html\\?id=${masina.ID}';">La model →</button>
                </div>
            </div>
        `;
        return div;
    };

    fetch('http://localhost:3000/modeleMasini')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                    body.appendChild(divMaker(record));
                });
            })
            .catch(error => {
                console.error('Eroare:', error);
            });
});