const carrouselImages = document.querySelector('.carrousel_images');
const carrouselButtons = document.querySelectorAll('.carrousel_button');
const numberOfImages = document.querySelectorAll('.carrousel_images .image').length;

const widthCarrousel = 100 * numberOfImages;
carrouselImages.style.width = `${widthCarrousel}%`

let imageIndex = 1;
let translateX = 0;

carrouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.id === 'previous') {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 100;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 100;
            }
        }
        carrouselImages.style.left = `${ translateX }%`;
    });
});