document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden-on-load");
  
    const observerOptions = {
      threshold: 0.1, 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-on-scroll");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    hiddenElements.forEach(el => {
      observer.observe(el);
    });
  });
  
  document.getElementById("test-drive").addEventListener("click", function () {
    alert("Test drive este în dezvoltare!");
});

document.getElementById("brosura").addEventListener("click", function () {
  alert("Brosura este în dezvoltare!");
});

const selectButtons = document.querySelectorAll('.btn-select');

selectButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    const modelName = btn.getAttribute('data-model');
    const modelPrice = btn.getAttribute('data-price');
    const modelPower = btn.getAttribute('data-power');

    const card = btn.closest('.model-card');

    const checkedColor = card.querySelector('input[type="radio"]:checked');
    let selectedColor = 'Nicio culoare selectată';
    if(checkedColor) {
      selectedColor = checkedColor.value;
    }

    document.getElementById('summaryModel').textContent = modelName;
    document.getElementById('summaryColor').textContent = selectedColor;
    document.getElementById('summaryPower').textContent = modelPower;
    document.getElementById('summaryPrice').textContent = modelPrice;

    document.getElementById('configSummary').style.display = 'block';

    document.getElementById('configSummary').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

 const colorButtons = document.querySelectorAll('.color-switcher .color-btn');

 const pumaMainImg = document.getElementById('pumaMainImage');

 colorButtons.forEach(btn => {
   btn.addEventListener('click', () => {

     const newImagePath = btn.getAttribute('data-img');
    
     pumaMainImg.src = newImagePath;
   });
 });