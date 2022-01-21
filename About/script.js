var typed = new Typed(".typing", {
    strings: ["ABOUT US"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["OUR TEAM"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navRight.classList.remove("active");
}))