const form = document.getElementById('emailForm');
const email = document.getElementById('emailField');
const small = form.querySelector('small');

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess()
    } else {
        showError('Please insert a valid email')
    }
};
function showError(message) {
    form.classList.add('error')
    small.innerText = message
};
function showSuccess() {
    form.className = 'email-form'
    small.innerText = ''
    email.value = ''
};
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (email.value != '') {
        checkEmail(email)
    } else {
        showError('Email field is empty')
    }

});

const cards = document.getElementsByClassName('card');
const dots = document.getElementsByClassName('dot');
let cardIndex = 1;

showCards(cardIndex);

// dot image controls

function currentCard(n) {
    showCards(cardIndex = n)
}

//  cycle through cards

function nextCard() {
    cardIndex++;

    if (cardIndex > cards.length) {
        cardIndex = 1
    }

    showCards(cardIndex)
}

// show selected Card

function showCards(n) {
    let i;

    if (n > cards.length) {
        cardIndex = 1
    }
    if (n < 1) {
        cardIndex = cards.length
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    cards[cardIndex - 1].classList.add('active-card')
    dots[cardIndex - 1].classList.add('active')
    
}

setInterval(nextCard, 15000);