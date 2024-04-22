import { autoclic } from './autoclicker.js';
import { click } from './click.js';

// Appelez la fonction autoclic pour lier le clic automatique
autoclic();

// Appelez la fonction click pour lier le clic manuel
click();


function init() {
    let petitbeurredata = JSON.parse(localStorage.getItem("petitbeurre"))
    let num = document.getElementById("num")
    num.innerText = petitbeurredata
}

window.onload = init()