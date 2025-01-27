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

    /* Fetch server-side info :D*/
    fetch('http://localhost:3000/modeleMasini')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('data-list');

                data.forEach(record => {
                    const listItem = document.createElement('li');
                    listItem.textContent = JSON.stringify(record);
                    list.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Eroare:', error);
            });

    
    /* Acum tot ce trb sa mai fac e sa parse informatiile din JSON si sa le bag intr-o lista de genul \/ */
    const masini = [
        { firma: 'Ford', model: 'Focus', pret: 18000, image: '../imagini/ford-explorer-electric.jpeg' },
    ];


    masini.forEach(masina => {
        body.innerHTML += divMaker(masina);
    });
});