let navigationBar = document.querySelector('.navigationBar')


window.addEventListener('scroll' ,( )=>{
    navigationBar.classList.toggle('active',window.scrollY > 0)
})