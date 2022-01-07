const login = document.querySelector('.login');
const register = document.querySelector('.register');
const h1 = document.querySelector('h1');
const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');

signUp.addEventListener('click', () => {
    login.classList.add("noDisplay");
    register.classList.remove("noDisplay");
    h1.innerHTML = "Register";
})
signIn.addEventListener('click', () => {
    register.classList.add("noDisplay");
    login.classList.remove("noDisplay");
    h1.innerHTML = "Login";
})
