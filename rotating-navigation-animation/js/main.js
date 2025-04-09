const open = document.getElementById('open');
const close = document.getElementById('close');
const circle = document.getElementById('circle');
const container = document.getElementById('container')
const nav = document.getElementById('nav')
const about = document.getElementById('about')
const contact = document.getElementById('contact')

open.onclick = () => {
    // circle
    circle.style.rotate = "-90deg"

    // container
    container.style.rotate = "-20deg"
    container.style.top = "-370px"
    container.style.left = "200px"

    // nav
    nav.style.left = "3%"
    about.style.left = "40%"
    contact.style.left = "80%"
    
}

close.onclick = () => {
    // circle
    circle.style.rotate = "0deg"

    // container
    container.style.rotate = "0deg"
    container.style.top = "0"
    container.style.left = "0"

    // nav
    nav.style.left = "-5%"
    about.style.left = "0"
    contact.style.left = "0"
}