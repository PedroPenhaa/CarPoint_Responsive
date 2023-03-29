const searchBox = document.querySelector('.search-box')
const searchIcon = document.querySelector('#search-icon')

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    menu.classList.remove('active')
})

const menu = document.querySelector('.navbar')
const menuIcon = document.querySelector('#menu-icon')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('.activeMenu')
    searchBox.classList.remove('activeMenu')
})



//Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})