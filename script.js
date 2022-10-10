const barsBtn = document.getElementById('bars')
const mobileMenu = document.querySelector('.mobile-menu')



barsBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle('active')
})