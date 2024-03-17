let i = document.querySelector("i");
let navEl = document.getElementById("navbar");
i.addEventListener("click", () => {
  navEl.classList.toggle("active");
  if (i.className === "fa-solid fa-bars") {
    i.className = "fa-solid fa-xmark";
  } else {
    i.className = "fa-solid fa-bars";
  }
});
