document.addEventListener("scroll", function () {
    const priceElement = document.querySelector(".texts1");
    const rect = priceElement.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        priceElement.classList.add("visible");
    } else {
        priceElement.classList.remove("visible");
    }
});
document.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    const stats = document.querySelectorAll(".stat-value");
    const rect = statsSection.getBoundingClientRect();
  
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      stats.forEach((stat) => {
        const target = +stat.getAttribute("data-target");
        let currentValue = 0;
  
        const increment = target / 100; 
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= target) {
            stat.textContent = target; 
            clearInterval(counter);
          } else {
            stat.textContent = currentValue.toFixed(1); 
          }
        }, 20); 
      });
    }
  });
  document.querySelectorAll(".color-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const colorName = button.getAttribute("data-color");
      const imgSrc = button.getAttribute("data-img");
      document.getElementById("carImage").src = imgSrc;
      document.getElementById("colorName").textContent = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    });
  });
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; 
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

const selectedConfig = {
  model: '',
  color: '',
  wheels: ''
};

const modelButtons = document.querySelectorAll('.model-btn');
const modelCards = document.querySelectorAll('.model-card');

modelButtons.forEach(button => {
  button.addEventListener('click', () => {
      modelButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedModel = button.getAttribute('data-model');

      modelCards.forEach(card => {
          if (selectedModel === 'all' || card.getAttribute('data-category') === selectedModel) {
              card.style.display = 'block';
              selectedConfig.model = card.querySelector('h4').innerText;
          } else {
              card.style.display = 'none';
          }
      });
  });
});

const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
      selectedConfig.color = button.getAttribute('data-color');
      alert(`Culoare selectată: ${selectedConfig.color}`);
  });
});

const wheelsSelects = document.querySelectorAll('.wheels-select');
wheelsSelects.forEach(select => {
  select.addEventListener('change', (event) => {
      selectedConfig.wheels = event.target.value;
      alert(`Jante selectate: ${selectedConfig.wheels}`);
  });
});

document.getElementById('saveConfig').addEventListener('click', () => {
  alert(`Configurația ta:
Model: ${selectedConfig.model}
Culoare: ${selectedConfig.color}
Jante: ${selectedConfig.wheels}`);
});
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('visible');
}

document.getElementById('saveConfig').addEventListener('click', () => {
  const wheels = document.getElementById('wheels').value;
  const trim = document.getElementById('trim').value;
  alert(`Configurația ta: Jante - ${wheels}, Echipare - ${trim}`);
});
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const videoHeight = document.querySelector(".video-container").offsetHeight;

  if (window.scrollY > videoHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

