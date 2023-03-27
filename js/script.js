const searchBox = document.querySelector('.search-box')
const searchIcon = document.querySelector('#search-icon')

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
})

