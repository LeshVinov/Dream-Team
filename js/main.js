const routesSwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
// слайдер

const modal = document.querySelector('.modal');
const modalOpenButtons = document.querySelectorAll('.slide-btn-lock')
const modalCloseButton = document.querySelector('.modal-close__button')



const toggleModal = function() {
  modal.classList.toggle('modal-open');
}

modalOpenButtons.forEach(modalOpenButton => {
  modalOpenButton.addEventListener('click', toggleModal
)});
modalCloseButton.addEventListener('click', toggleModal)
// модалка