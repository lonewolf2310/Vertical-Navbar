const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const slideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click',function() {
    slideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click',function() {
    slideMenu.classList.remove('active')
})