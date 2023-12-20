const btn = document.getElementById("btn")
const text = document.querySelector(".text")
btn.addEventListener("click", onClick)
function onClick() {
    text.classList.add("move")
}