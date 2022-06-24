const LoginButton = document.querySelector('.login__btn');
const LoginSection = document.querySelector('.login');


LoginButton.addEventListener('click',() => {
    LoginSection.classList.add('flex--login');
    document.body.classList.add('locked');
    document.querySelector('.main').classList.add('blured');
    document.querySelector('.header').classList.add('blured');
})

LoginSection.addEventListener('click',() => {
    LoginSection.classList.remove('flex--login');
    document.querySelector('.main').classList.remove('blured');
    document.querySelector('.header').classList.remove('blured');
    document.body.classList.remove('locked');

})
