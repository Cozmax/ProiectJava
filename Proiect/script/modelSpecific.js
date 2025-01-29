document.addEventListener('DOMContentLoaded', () => {
    let currentUrl = window.location.toString();
    currentUrl = currentUrl.split("/");
    currentUrl = currentUrl[currentUrl.length-1].split("=");

    fetch('http://localhost:3000/detaliiMasini')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                    // Aici trebuie adaugata partea aia
                });
            })
            .catch(error => {
                console.error('Eroare:', error);
            });

    document.title = currentUrl[currentUrl.length-1];
    
});

function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}