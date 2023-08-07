// --Account Section--
const userName = localStorage.getItem("Name");
const profileName = document.querySelector('.profile-name');
const userEmail = localStorage.getItem('Email');
const profileEmail = document.querySelector('.profile-email');

profileName.innerHTML += `<p>Username: ${userName}</p>`;
profileEmail.innerHTML += `<p>Email: ${userEmail}</p>`;

const logOutBtn = document.querySelector('#log-out-btn');

logOutBtn.addEventListener('click', function(){
    localStorage.setItem("signedIn", false);
    window.setTimeout(() =>{
        window.location.href = './index.html';
    }, 100);
})
