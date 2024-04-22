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

let minerCost = document.querySelector(".miner-cost");
let parsedMinerCost = parseFloat(minerCost.innerHTML);
let minerLevel = document.querySelector(".miner-level");
let minerIncrease = document.querySelector(".miner-increase");
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML);

let pbpcText = document.getElementById("pbpc-text");
let pbpsText = document.getElementById("pbps-text");

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

function buyMiner() {
  if (parsedPetitBeurre >= parsedMinerCost) {
    petitBeurre.innerHTML = Math.round(parsedPetitBeurre -= parsedMinerCost);

    minerLevel.innerHTML++;

    parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2));
    minerIncrease.innerHTML = parsedMinerIncrease;
    pbps += parsedMinerIncrease;

    parsedMinerCost *= 1.18;
    minerCost.innerHTML = Math.round(parsedMinerCost);
  }
}

setInterval(() => {
  parsedPetitBeurre += pbps / 10;
  petitBeurre.innerHTML = Math.round(parsedPetitBeurre);
  pbpcText.innerHTML = Math.round(pbpc);
  pbpsText.innerHTML = Math.round(pbps)
}, 100);

