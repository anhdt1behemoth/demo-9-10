let btn = document.querySelector("#btn")
let contentRight = document.querySelector(".container_right")
let update = document.querySelector('.update_scroll')

btn.onclick = function() {
    contentRight.classList.toggle("active");
}

update.onclick = function() {
    contentRight.classList.toggle("active")
}