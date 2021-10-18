function abrirMenu() {
    let menuu = document.getElementById('menu');
    menuu.classList.toggle('abrirMenu')
}


window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);

    let logo = document.getElementById('logoH');

    if( windowPosition > 0 ){
			logo.src= "assets/H-originalBlanco.png";
		} else {
			logo.src= "assets/H-original.png";

		}

    // let logo = document.getElementById('logoH').src = "assets/H-originalBlanco.png";
    // logo.classList.


});


