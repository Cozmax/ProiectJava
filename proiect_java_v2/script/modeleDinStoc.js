document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('main-body');

    const divMaker = ({ firma, model, pret, image }) => {
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

    
    const masini = [
        { firma: 'Ford', model: 'Focus', pret: 18000, image: '../imagini/ford-explorer-electric.jpeg' },
    ];


    masini.forEach(masina => {
        body.innerHTML += divMaker(masina);
    });
});