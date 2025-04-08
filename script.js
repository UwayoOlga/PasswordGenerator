 

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const lengthInput = document.getElementById('length');
    const uppercaseInput = document.getElementById('uppercase');
    const lowercaseInput = document.getElementById('lowercase');
    const numbersInput = document.getElementById('numbers');
    const symbolsInput = document.getElementById('symbols');
    const generateButton = document.getElementById('generate');
    const copyIcon = document.getElementById('copyicon');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';

    function generatePassword() {
        const length = parseInt(lengthInput.value);
        if (isNaN(length) || length < 1) {
            alert('Please enter a valid password length.');
            return '';
        }

        let allowedChars = '';
        if (uppercaseInput.checked) allowedChars += uppercaseChars;
        if (lowercaseInput.checked) allowedChars += lowercaseChars;
        if (numbersInput.checked) allowedChars += numberChars;
        if (symbolsInput.checked) allowedChars += symbolChars;

        if (allowedChars === '') {
            alert('Please select at least one character type.');
            return '';
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars.charAt(randomIndex);
        }
        return password;
    }

    generateButton.addEventListener('click', () => {
        const newPassword = generatePassword();
        display.value = newPassword;
    });

    copyIcon.addEventListener('click', () => {
        if (display.value) {
            display.select();
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('Password copied to clipboard!');
        } else {
            alert('No password to copy.');
        }
    });
});