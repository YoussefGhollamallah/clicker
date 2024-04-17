let petitBeurre = document.querySelector(".petitBeurre-cost");
let parsedPetitBeurre = parseFloat(petitBeurre.innerHTML);

let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let pickaxeCost = document.querySelector(".pickaxe-cost");
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML);
let pickaxeLevel = document.querySelector(".pickaxe-level");
let pickaxeIncrease = document.querySelector(".pickaxe-increase");
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML);

let pbpc = 1;
let pbps = 0;

function incrementPetitBeurre() {
  petitBeurre.innerHTML = Math.round((parsedPetitBeurre += pbpc));
}

function buyClicker() {
  if (parsedPetitBeurre >= parsedClickerCost) {
    petitBeurre.innerHTML = Math.round(
      (parsedPetitBeurre -= parsedClickerCost)
    );

    clickerLevel.innerHTML++;

    parsedClickerIncrease = parseFloat(
      (parsedClickerIncrease * 1.03).toFixed(2)
    );
    clickerIncrease.innerHTML = parsedClickerIncrease;
    pbpc += parsedClickerIncrease;

    parsedClickerCost *= 1.18;
    clickerCost.innerHTML = Math.round(parsedClickerCost);
  }
}

function buyPickaxe() {
  if (parsedPetitBeurre >= parsedPickaxeCost) {
    petitBeurre.innerHTML = Math.round(
      (parsedPetitBeurre -= parsedPickaxeCost)
    );

    pickaxeLevel.innerHTML++;

    parsedPickaxeIncrease = parseFloat(
      (parsedPickaxeIncrease * 1.03).toFixed(2)
    );
    pickaxeIncrease.innerHTML = parsedPickaxeIncrease;
    pbps += parsedPickaxeIncrease;

    parsedPickaxeCost *= 1.18;
    pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
  }
}

setInterval(() => {
  parsedPetitBeurre += pbps / 10;
  petitBeurre.innerHTML = Math.round(parsedPetitBeurre);
}, 100);
