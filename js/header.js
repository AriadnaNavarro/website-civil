function abrirMenu() {
    let menuu = document.getElementById('menu');
    menuu.classList.toggle('abrirMenu')
}


window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});