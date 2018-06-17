
var btn      = document.querySelector('.site-content .btn-box .btn');
var cardBox  = document.querySelector('.site-content .card-box');

btn.addEventListener('click', changeCardStrate)

function changeCardStrate() {
    if (Object.values(cardBox.classList).indexOf('active') != -1) {

        cardBox.classList.remove('active');
    } else {
        cardBox.classList.add('active');        
    }
}