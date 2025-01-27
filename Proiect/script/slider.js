const productContainers = [...document.querySelectorAll(".slider-container")];
const nxtBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const buttons = document.querySelectorAll(".slider-nav button");
const cards = document.querySelectorAll(".slider-container .content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      if (filter === "all") {
        // Afișează toate cardurile
        card.style.display = "block";
      } else if (card.classList.contains(filter)) {
        // Afișează cardurile care se potrivesc cu filtrul
        card.style.display = "block";
      } else {
        // Ascunde restul cardurilor
        card.style.display = "none";
      }
    });
  });
});
