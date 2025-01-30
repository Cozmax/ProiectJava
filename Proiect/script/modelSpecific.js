document.addEventListener('DOMContentLoaded', () => {
    let currentUrl = window.location.toString();
    currentUrl = currentUrl.split("/");
    currentUrl = currentUrl[currentUrl.length-1].split("=");

    let spans = document.querySelectorAll("span");

    let infoColumns = ['ID', 'AnFabricatie', 'Combustibil', 'Transmisie', 'CapacitateMotor', 'Putere', 'ConsumMediu', 'VitezaMaxima', 'Acceleratie', 'Lungime', 'Latime', 'Inaltime', 'Masa', 'Tractiune'];

    function placingData(coloane) {
        let number = 0;

        spans.forEach(span => {
            
            if(number != 0)

                if (infoColumns[number] == "Lungime"){
                    span.innerHTML = coloane[infoColumns[number]] + ' x ' + coloane[infoColumns[number+1]] + ' x ' +coloane[infoColumns[number+2]];
                    number+=2;
                } else {
                    if(coloane[infoColumns[number]] != null)
                        span.innerHTML = coloane[infoColumns[number]];
                    else span.innerHTML = 'NoN';
                }
            number++;
        });
    }

    function addImages(){
        let name = document.title.split(" ")[1];
        name.toLowerCase();

        const bigImage = document.getElementById("mainImage");

        const container = document.getElementById("imaginiMici");
        let index = 1;

        function tryImage(){
            const path = `../imagini/modeleMasini/${name}${index}.jpg`;

            let tagIMG = document.createElement("img");
                
            tagIMG.src = path;
            tagIMG.alt = `${name}${index}`;
            tagIMG.onload = function () {
                container.appendChild(tagIMG);
                index++;
                tryImage();
                bigImage.src = `../imagini/modeleMasini/${name}.jpg`
            };
            
        }
        tryImage();
        
        if (container && bigImage) {
            container.addEventListener("click", function(event) {
                if (event.target.tagName === "IMG") {
                    bigImage.src = event.target.src;
                }
            });
        }
    }
    fetch('http://localhost:3000/modeleMasini')
        .then(response => response.json())
            .then(data => {
                data.forEach(data => {
                    if(data.ID == currentUrl[currentUrl.length-1]){
                        let name = data.Firma + data.Model;
                        spans[0].innerHTML = name;
                        document.title = name;
                        addImages(); 
                    }
                });
            })
            .catch(error => {
                console.error('Eroare:', error);
            });
    
    fetch('http://localhost:3000/detaliiMasini')
        .then(response => response.json())
            .then(data => {
                data.forEach(data => {
                    if(data.ID == currentUrl[currentUrl.length-1])
                        placingData(data);
                });
            })
            .catch(error => {
                console.error('Eroare:', error);
            });
    
       
});

function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}