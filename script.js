const passwordField = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPRSWXYZ";
const lowerCase = "abcdefghijkloprstuvyxz";
const number = "012346789";
const symbols = "@#$%^*[]+<>-=~";
const allChars = upperCase + lowerCase + number + symbols;
const firstBtn = document.querySelector(".header__button");
const headerImg = document.querySelector(".header__img");
const errorResult =document.getElementById("error");
const positiveResult = document.getElementById("success");
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordField.value = password;
    if(password.length < 12 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[@#$%^*[\]+<>-=~]/.test(password)){
        errorResult.textContent = "Password must be minimum 12 characters, symbols, numbers";
        errorResult.style.display = "block";
        positiveResult.style.display = "none";
        } else {
        positiveResult.textContent = "Everything is okei."
        positiveResult.style.display = "block";
        errorResult.style.display = "none";
        }
}

async function copyPassword() {
    if (!passwordField.value) {
        alert("Parole nav izveidota vai ir tukša.");
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordField.value);
        alert("Password succeed copied");
    } catch (err) {
        console.error("Password didn't copy:", err);
        alert("Error while copy password. Please try again.");
    }
}

firstBtn.addEventListener('click', createPassword);
headerImg.addEventListener('click',copyPassword);
