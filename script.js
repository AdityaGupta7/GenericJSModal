'use strict';

const modalWindow = document.querySelector('.modal');
const modalCrossBtn = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.overlay');
const anyButton = document.querySelectorAll('.show-modal');

const HIDDEN_CLASS = 'hidden';

function addRemoveModal(add) {
    if (add) {
        modalWindow.classList.add(HIDDEN_CLASS);
        modalOverlay.classList.add(HIDDEN_CLASS);
    }
    else {
        modalWindow.classList.remove(HIDDEN_CLASS);
        modalOverlay.classList.remove(HIDDEN_CLASS);
    }
}

anyButton.forEach(node => node.addEventListener('click', addRemoveModal.bind(null, false)));

modalCrossBtn.addEventListener('click', addRemoveModal.bind(null, true));

modalOverlay.addEventListener('click', addRemoveModal.bind(null, true));

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modalWindow.classList.contains(HIDDEN_CLASS)) {
        addRemoveModal(true);
    }
});