const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const symbol = "~`!@#$%^&*()_-+={[}]|;'<,>.?/";
const characters = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

function getRandomLower() {
    return characters[Math.floor(Math.random()*26)];
}

function getRandomUpper() {
    return characters[Math.floor(Math.random()*26)].toUpperCase();
}

function getRandomNumber() {
    return number[Math.floor(Math.floor(Math.random()*10))];
}

function getRandomSymbol() {
    return symbol[Math.floor(Math.random()*29)];
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    for(let i =0; i<length; i++){
        if(uppercaseEl.checked){
            password = password + upper();
            if(password.length >= length){
                break;
            }
        }
        if(lowercaseEl.checked){
            password = password + lower();
            if(password.length >= length){
                break;
            }
        }
        if(numbersEl.checked){
            password = password + number();
            if(password.length >= length){
                break;
            }
        }
        if(symbolsEl.checked){
            password = password + symbol();
            if(password.length >= length){
                break;
            }
        }
    }
    return password;
}

generateEl.addEventListener('click', () => {
    let pass = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, lengthEl.value);
    resultEl.innerHTML = pass;
})

clipboardEl.addEventListener('click', () => {
    const resultEl1 = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultEl1).then(() => {
        alert("Copied Successfully!");
    })
    
})




