const sidebar = document.querySelector('.sidebar')

function showSidebar() {
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    sidebar.style.display = 'none'
}


const emailField = document.getElementById('emailField');
const form = document.getElementById('emailForm')
const small = form.querySelector('small');


function checaEmail(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        mostraSucesso()
    } else {
        mostraErro('Please insert a valid email')
    }
};

function mostraErro(message) {
    form.classList.add('erro')
    small.innerText = message
};
function mostraSucesso() {
    form.className = 'email-form'
    small.innerText = ''
    email.value = ''
};
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (email.value != '') {
        checaEmail(email)
    } else {
        mostraErro('O campo não foi preenchido')
    }
});



let cardIndex = 1;
const cards = document.getElementsByClassName('card');
const dots = document.getElementsByClassName('dot');

mostraCards(cardIndex);

function cardAtual(n) {
    mostraCards(cardIndex = n)
}


function proxCard() {
    cardIndex++;

    if (cardIndex > cards.length) {
        cardIndex = 1;
    }

    mostraCards(cardIndex)
}
function mostraCards(n) {
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
    
};

setInterval(proxCard, 15000);