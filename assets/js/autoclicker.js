let autoclickere = document.getElementById("autoclic");
let num = document.getElementById("num");
let count = 0;

export function autoclic() {
    autoclickere.addEventListener("click", () => {
        setInterval(() => {
            count++;
            num.innerText = count;
        }, 1000);
    });
}
