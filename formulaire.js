
document.addEventListener("DOMContentLoaded", () => {
  const champs = document.querySelectorAll("[data-form-field]");
  champs.forEach(champ => {
    champ.addEventListener("click", () => {
      const valeur = prompt("Entrer une valeur pour " + champ.dataset.formField + " :");
      if (valeur !== null) {
        champ.innerText = valeur;
      }
    });
  });
});
