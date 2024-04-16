

let imgClick = document.getElementById("clickbuton");
let num = document.getElementById("num")
let count = 0;

function click() {
    
    imgClick.addEventListener("click", ()=> {
        count++
        num.innerText = count
        
    })
}
click()

localStorage.setItem("totalPetitBeurre", 5);


