const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// function isPalindrome, takes a string
const isPalindrome = str => {
    // remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // check if the alphanumeric string is the same forwards and backwards
    for (let i = 0; i < alphanumericStr.length / 2; i++) {
        if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

const checkForPalindrome = inputText => {
    if (inputText === '') {
        alert("Please input a value");
    } else {
        if (isPalindrome(inputText)) {
            resultDiv.textContent = inputText + " is a palindrome!";
        } else {
            resultDiv.textContent = inputText + " is not a palindrome!";
        }
    }
    resultDiv.classList.remove('hidden');
    // clear input field after check
    userInput.value = '';
};

checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
    }
});