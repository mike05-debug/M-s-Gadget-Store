// --Signin 

const storedName = localStorage.getItem("Name");

// Pages
let signinPage = document.getElementById('signin-page');
let resetPage = document.getElementById('reset-page');
let loginPage = document.getElementById('login-page');

// Buttons
let loginPageBtn = document.getElementById('login-page-btn');
let signinPageBtn = document.getElementById('signin-page-btn');
let resetPageBtn = document.getElementById('reset-page-btn');

signinPage.style.display = 'none'
resetPage.style.display = 'none'
loginPageBtn.style.backgroundColor = '#00a17c'

loginPageBtn.onclick = () => {
    loginPage.style.display = 'contents'
    signinPage.style.display = 'none'
    resetPage.style.display = 'none'
    loginPageBtn.style.backgroundColor = '#00a17c'
    signinPageBtn.style.backgroundColor = '#ffc766'
    resetPageBtn.style.backgroundColor = '#ffc766'
}

signinPageBtn.onclick = () => {
    signinPage.style.display = 'contents'
    loginPage.style.display = 'none'
    resetPage.style.display = 'none'
    signinPageBtn.style.backgroundColor = '#00a17c'
    loginPageBtn.style.backgroundColor = '#ffc766'
    resetPageBtn.style.backgroundColor = '#ffc766'
}

resetPageBtn.onclick = () => {
    resetPage.style.display = 'contents'
    signinPage.style.display = 'none'
    loginPage.style.display = 'none'
    resetPageBtn.style.backgroundColor = '#00a17c'
    signinPageBtn.style.backgroundColor = '#ffc766'
    loginPageBtn.style.backgroundColor = '#ffc766'
}

// // --Login page--

// const loginBtn = document.querySelector("#login-btn")
// const lgEmail = document.querySelector("#inp-email-lg")
// const lgPswd = document.querySelector("#inp-pass-lg")

// loginBtn.addEventListener('click', function(e){

//     e.preventDefault();

//     const storedEmail = localStorage.getItem("Email");
//     const storedPswd = localStorage.getItem("Password");

//     const userEmailKey = lgEmail.value;
//     const userPswdKey = lgPswd.value;

//     if (userEmailKey && userPswdKey) {
//         if (userEmailKey === storedEmail && userPswdKey === storedPswd){
//             if(signedIn == 'true'){
//                 swal(`User ${storedName} is already signed in. Log out before trying again.`)
//             }
//             else{
//                 localStorage.setItem("signedIn", true);
//                 alert(`Welcome back ${localStorage.getItem("Name")}.`);
//                 window.setTimeout(() =>{
//                     window.location.href = './myaccount.html';
//                 }, 100);
//             }
//         }
//         else{
//             swal(`wrong email and password combination`)
//         }
//     }
//     else{
//         swal(`Please fill out this field`);
//     }
// })

// // --Sign Up Page--

// const signBtn = document.querySelector('#acc-btn');
// const usernameInp = document.querySelector('.inp-username');
// const userEmail = document.querySelector('.inp-email');
// const userPswd = document.querySelector('.inp-pass')

// signBtn.addEventListener('click', function(e){
//     e.preventDefault();
    
//     const usernameKey = usernameInp.value;
//     const userEmailKey = userEmail.value;
//     const userPswdKey = userPswd.value;

//     if (usernameKey && userEmailKey && userPswdKey){
//         if(signedIn == 'true'){
//             swal(`User ${storedName} is already signed in. Log out before trying again.`);
//         }
//         else{
//             localStorage.setItem("Name", usernameKey);
//             localStorage.setItem("Email", userEmailKey);
//             localStorage.setItem("Password", userPswdKey);
//             localStorage.setItem("signedIn", true);
//             swal(`Account ${usernameKey} created successfully.`);
//             window.setTimeout(() =>{
//                 window.location.href = './myaccount.html';
//             }, 100);
//         }
//     }
//     else {
//         swal('Failed to create account');
//     }
// })

// // --Reset Page--

// const resetBtn = document.getElementById('reset-btn');
// const userReset = document.querySelector('#inp-pass-reset');

// resetBtn.onclick = (e) => {
//     e.preventDefault();

//     const userResetKey = userReset.value;

//     if(signedIn == 'true' && userResetKey){
//         localStorage.setItem("Password", userResetKey);
//         swal(`${localStorage.getItem("Name")}'s password reset successfully.`)
//         window.setTimeout(() =>{
//             window.location.href = './signup.html';
//         }, 100);
//     }
//     else{
//         swal(`Error resetting password. Please check if you have signed in or type in the password field.`);
//     }
// }
