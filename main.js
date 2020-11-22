const naviButton = document.querySelectorAll('.menu-navigation-element')
let naviButtonArray = [...naviButton]

const daniaGlowneItem = document.querySelector('.dania-glowne')
const deseryItem = document.querySelector('.desery')
const napojeItem = document.querySelector('.napoje')
const dzieciItem = document.querySelector('.dla-dzieci')

naviButtonArray.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if (e.target.classList.contains("menu-navigation-element-desery")) {
            daniaGlowneItem.style.display = "none";
            deseryItem.style.display = "flex";
            napojeItem.style.display = "none";
            dzieci.style.display = "none"; }
        else if (e.target.classList.contains("menu-navigation-element-napoje")) {
            daniaGlowneItem.style.display = "none";
            deseryItem.style.display = "none";
            napojeItem.style.display = "flex";
            dzieci.style.display = "none";}
        else if (e.target.classList.contains("menu-navigation-element-dzieci")) {
            daniaGlowneItem.style.display = "none";
            deseryItem.style.display = "none";
            napojeItem.style.display = "none";
            dzieciItem.style.display = "flex";}
        else {
            daniaGlowneItem.style.display = "flex";
            deseryItem.style.display = "none";
            napojeItem.style.display = "none";
            dzieciItem.style.display = "none";}         
    })
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('.main-navigation');
    let windowPosition = window.scrollY > 800;
    header.classList.toggle('scrolling-active', windowPosition);
})