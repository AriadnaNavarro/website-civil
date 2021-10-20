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
			logo.src= "assets/H-original.png";}





});






// const sections = document.querySelectorAll('section')
// const navLi = document.querySelectorAll('nav ul li')

// window.addEventListener('scroll', () =>{
//     let current = '';
//     // console.log(pageYOffset);
//  sections.forEach( section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeigth;
//     if (pageYOffset >= sectionTop) {
//         current = section.getAttribute('id');

         
//     } 

//     navLi.forEach( li => {
//              // li.classList.remove('active');
//              if (li.classList.contains(current)) {
//                 // li.classList.add('active');
//              }
//         })
   

//  })



       
//          console.log(current);
// })


