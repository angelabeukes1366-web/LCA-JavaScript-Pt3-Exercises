const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredients = document.querySelectorAll("#ingredientsList li");

generateButton.addEventListener("click", function () {
  let countdown = 3;

  spellArea.textContent = countdown;

  const timer = setInterval(() => {
    countdown--;

    if (countdown > 0) {
      spellArea.textContent = countdown;
    } else {
      clearInterval(timer);

      // Random ingredient
      const randomIndex = Math.floor(Math.random() * ingredients.length);
      const spell = ingredients[randomIndex].textContent;

      // Display spell
      spellArea.textContent = `✨ Spell Created: ${spell} ✨`;

      // Random color
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      spellArea.style.backgroundColor = randomColor;
    }
  }, 1000);
});

resetButton.addEventListener("click", function () {
  spellArea.textContent = "Your spell will appear here...";
  spellArea.style.backgroundColor = "white";
});
