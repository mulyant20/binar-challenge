const btnOpen = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')
const navMobile = document.querySelector('.nav-mobile')

btnOpen.addEventListener('click', () => {
	navMobile.classList.toggle('active')
})


btnClose.addEventListener('click', () => {
	navMobile.classList.remove('active')
})