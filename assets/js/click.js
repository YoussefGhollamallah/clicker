let imgClick = document.getElementById("clickbuton");
let num = document.getElementById("num");
let count = localStorage.getItem("petitbeurre") || 0;

export function click() {
    imgClick.addEventListener("click", () => {
        count++;
        localStorage.setItem("petitbeurre", count);
        num.innerText = count;
        animateIcon()
    });
}


function animateIcon() {
    imgClick.style.transition = "transform 0.3s ease-in-out";
    imgClick.style.transform = "translateY(-20px)";
    setTimeout(() => {
        imgClick.style.transform = "translateY(0)";
    }, 300);
}