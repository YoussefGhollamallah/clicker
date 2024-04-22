let autoclickere = document.getElementById("autoclic");
let num = document.getElementById("num");
let imgClick = document.getElementById("clickbuton");
let count = localStorage.getItem("petitbeurre") || 0;
let autoClickInterval;

export function autoclic() {
    autoclickere.addEventListener("click", () => {
        if (!autoClickInterval) {
            autoClickInterval = setInterval(() => {
                count++;
                localStorage.setItem("petitbeurre", count);
                num.innerText = count;
                animateIcon()
            }, 1000);
        }
    });
}


function animateIcon() {
    imgClick.style.transition = "transform 0.3s ease-in-out";
    imgClick.style.transform = "translateY(-20px)";
    setTimeout(() => {
        imgClick.style.transform = "translateY(0)";
    }, 300);
}