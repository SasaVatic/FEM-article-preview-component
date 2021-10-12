const btnShare = document.querySelector('.btn-share');
const shareBox = document.querySelector('.card__share-box');
const cardAuthorBox = document.querySelector('.card__author-box');
const body = document.body;

btnShare.addEventListener('click', () => {
    btnShare.classList.toggle('active');
    shareBox.classList.toggle('active');
    if(window.innerWidth < 576) {
        cardAuthorBox.classList.toggle('active');
    }
    if(window.innerWidth < 900 && window.innerWidth > 575) {
        body.classList.toggle('active');
    }
});