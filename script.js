'use strict'
document.addEventListener("DOMContentLoaded", () => {
    //button click
    let callBackButton = document.getElementById('btn');

    //modal window to open
    let modal1 = document.getElementById('modal-1');

    //close button inside modal window
    let closeBtn = modal1.getElementsByClassName('modal__close-btn')[0];

    let tagBody = document.getElementsByTagName('body');

    callBackButton.onclick = function (e) {
        e.preventDefault();
        modal1.classList.add('modal_active');
    }

    closeBtn.onclick = function (e) {
        e.preventDefault();
        modal1.classList.remove('modal_active');
    }

    modal1.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modal1.getElementsByClassName('modal__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
        }
    };
})
