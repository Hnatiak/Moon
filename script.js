let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let btnUp = document.getElementById('up')
let header = document.querySelector('header')
let home = document.getElementById('homeLi')

function checkScreenWidth() {
    let width = window.innerWidth;
    if (width < 800) {
        home.style.paddingTop = '25px';
    } else {
        home.style.paddingTop = '0px';
    }
}

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    
    if (value > 500) {
        header.style.backgroundColor = 'rgba(0, 0, 1, 1)'; // Напівпрозорий чорний фон
    } else {
        header.style.backgroundColor = 'transparent'; // Відсутність фону
        home.style.paddingTop = '0px'
    }
})

btnUp.addEventListener('click', function() {
    window.scrollTo(0, 0)
})