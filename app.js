'use strict';

const openModal = document.querySelector('.open-modal-button');
const closeModal = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const body = document.querySelector('.body');

openModal.addEventListener('click', function (evt) {
  // When button clicked add class .open and hide open button;
  modal.classList.add('open-animation');
  openModal.classList.add('block-button');

  if (modal) {
    body.classList.add('blur');
  }
});

closeModal.addEventListener('click', function (evt) {
  // When button clicked remove class .open and show open button;
  modal.classList.remove('open-animation');
  openModal.classList.remove('block-button');
  if (modal) {
    body.classList.remove('blur');
  }
});
