'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const imgEng = document.querySelector('.img-eng');

console.log(btnsOpenModal);
//Below is the function used to hide the model
const closeModal = function () {
  modal.classList.add('hidden'); //Classlist is
  overlay.classList.add('hidden');
};
// below is the function used to open the model
const openModal = function () {
  modal.classList.remove('hidden'); //classlist is used to access the elements classes .
  overlay.classList.remove('hidden');
};
for (
  let i = 0;
  i < btnsOpenModal.length;
  i++ //is used to acces the modals as there r three modals so to access each one my one we used for loop
)
  btnsOpenModal[i].addEventListener('click', openModal); // This will open the modal one by one on click
btnCloseModal.addEventListener('click', closeModal); //to cloe the modal.
overlay.addEventListener('click', closeModal); //when we click outside it will close the modal

document.addEventListener('keydown', function (e) {
  //this is an eventhandler function checks for which key is pressed.
  // console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //this means that if modal class not contains class hidden and esc key is pressed it will add the hidden class to it .
    closeModal();
  }
});
