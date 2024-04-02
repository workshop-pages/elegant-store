import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        769: {
            spaceBetween: 24,
        },
    }
}
);
export default Swiper;