const searchBox = document.querySelector('.search-box')
const searchIcon = document.querySelector('#search-icon')

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
})

//Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})