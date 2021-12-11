const bg=document.querySelector('.bg');
const container=document.querySelector('.container');

window.addEventListener('scroll',function() {
    bg.style.opacity= 1 + - window.pageYOffset/500;
    container.style.opacity= 1 + - window.pageYOffset/800;

})