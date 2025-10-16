const box = document.getElementById("box");

const fruits = document.querySelectorAll(".fruits > li");

for (const fruit of fruits) {
  fruit.addEventListener("click", () => {
    const words = fruit.textContent.split(" - ");
    console.log(words);
    box.textContent = words[0];
    box.style.backgroundColor = words[1];
    for (const fruit of fruits) {
      fruit.style.backgroundColor = "";
    }
    fruit.style.backgroundColor = words[1];
  });
}
