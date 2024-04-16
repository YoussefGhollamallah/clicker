
let imgClick = document.getElementById("clickbuton");
let num = document.getElementById("num")
let count = 0;

console.log('z')
export function click() {
    
    imgClick.addEventListener("click", ()=> {
        count++
        num.innerText = count
        
    })
}