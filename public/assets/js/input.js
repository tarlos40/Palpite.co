const passwordInput = document.querySelectorAll('.input');
const showPasswordCheckbox = document.querySelector('#showPassword');

console.log(passwordInput);

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput[1].type = 'text';
    } else {
        passwordInput[1].type = 'password';
    }
});
