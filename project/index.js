const btn = document.getElementById("btn")
const text = document.querySelector(".text")
const form = document.querySelector(".form")
const userName = document.querySelector(".user-name")
const userPhone = document.querySelector(".user-phone")
const userEmail = document.querySelector(".user-email")

btn.addEventListener("click", onClick)
function onClick() {
    text.classList.add("move")
}

form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault()
    const data = e.currentTarget.elements;
    const name = data.name.value
    const phone = data.phone.value
    const email = data.email.value
    userName.textContent = name
    userPhone.textContent = phone
    userEmail.textContent = email 
}