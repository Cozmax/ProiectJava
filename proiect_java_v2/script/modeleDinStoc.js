document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('main-body');

    const createCard = ({ firma, model, pret, image }) => {
        return `
            <div class="masina">
                <img src="${image}" alt="${model}">
                <div class="masina-info">
                    <h3>${firma} ${model}</h3>
                    <p class="pret">$${pret}</p>
                </div>
            </div>
        `;
    };

    /* Aici trebuie schimbat: Conexiune SQL -> Query pentru a prelua datele din tabelul MasiniDisponibile -> Feed into `masini` -> Let the magic happen */
    const sqlCON = "";
    
    const masini = [
        { firma: 'Ford', model: 'Focus', pret: 18000, image: '../imagini/ford-explorer-electric.jpeg' },
    ];


    masini.forEach(masina => {
        body.innerHTML += createCard(masina);
    });
});