// --Navigation Section
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const accOutput = document.getElementById('acc-output');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// boolean to check if your have signed

const signedIn = localStorage.getItem("signedIn");

if (signedIn == 'true') {
    accOutput.innerHTML += `<a href="myaccount.html" class="navbar-links">My Account</a>`;
}
else {
    accOutput.innerHTML += ``;
}

// Contact and Chat Buttons
const contactSection = document.querySelector('.contact-section');
const contactBtn = document.querySelector('.contact-btn');
const contactExit = document.getElementById('exit-contact');
const chatBtn = document.querySelector('.chat-btn');

contactBtn.addEventListener('click', () => {
    contactSection.style.transform = 'translateX(-30rem)'
})

contactExit.onclick = () => contactSection.style.transform = 'translateX(30rem)'

chatBtn.addEventListener('click', () =>{
    console.log('good')
})

// Cart Section
const cartSection = document.querySelector('.cart-section');
const cartBtn = document.getElementById('cart-btn');
const cartExtBtn = document.getElementById('exit-cart');

cartBtn.onclick = () => cartSection.style.transform = 'translateY(40rem)';

cartExtBtn.onclick = () => cartSection.style.transform = 'translateY(-40rem)';
