const searchBox = document.querySelector('.search-box')
const searchIcon = document.querySelector('#search-icon')

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    menu.classList.remove('active')
})

const menu = document.querySelector('.navbar')
const menuIcon = document.querySelector('#menu-icon')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
    searchBox.classList.remove('active')
})

// Hide Menu And Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    searchBox.classList.remove('active');
}

//Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})