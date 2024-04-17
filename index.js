let petitBeurre = document.querySelector(".petitBeurre-cost");
let parsedPetitBeurre = parseFloat(petitBeurre.innerHTML);

let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

function incrementPetitBeurre() {
  parsedPetitBeurre += 1;
  petitBeurre.innerHTML = parsedPetitBeurre;
}

function buyClicker() {
  if (parsedPetitBeurre >= parsedClickerCost)
    parsedPetitBeurre -= parsedClickerCost;
  petitBeurre.innerHTML = parsedPetitBeurre;
}
