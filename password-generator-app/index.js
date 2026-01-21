
const passwordInput = document.getElementById("password");
const copyBtn = document.querySelector(".password__copy-btn");

const showCopiedText = document.querySelector(".password__copied-text");
const showPasswordStrength = document.querySelector(".password__strength-text");

const passwordLengthText = document.querySelector(".password__length-value");
const passwordRangeBar = document.getElementById("range");

const passwordCheckBox = document.querySelectorAll(".password__checkbox");
const showStrength = document.querySelectorAll(".bar");

const generateBtn = document.querySelector(".password-return-btn");


// 字符池
const charStr = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
}

// 密码生成函数
function Passwordcreater(){

    let userchar = "";
    let score = 0;

    if(passwordCheckBox[0].checked) {
        userchar += charStr["uppercase"];
        score++;
    }
    if(passwordCheckBox[1].checked) {
        userchar += charStr["lowercase"]; 
        score++; 
    }
    if(passwordCheckBox[2].checked) {
        userchar += charStr["numbers"];
        score++;
    }
    if(passwordCheckBox[3].checked) {
        userchar += charStr["symbols"]; 
        score++;
    }

    for(let i = 0; i < score; i++) {
        showStrength[i].classList.add("strength");
    }

    switch(score) {
        case 1:
            showPasswordStrength.textContent = "TOO WEAK!";
            showPasswordStrength.style.color = "#F64A4A";
            showPasswordStrength.classList.add("show-strength");
            break;
        case 2:
            showPasswordStrength.textContent = "WEAK";
            showPasswordStrength.style.color = "#FB7C58";
            showPasswordStrength.classList.add("show-strength");
            break;
        case 3:
            showPasswordStrength.textContent = "MEDIUM";
            showPasswordStrength.style.color = "#F8CD65";
            showPasswordStrength.classList.add("show-strength");
            break;
        case 4:
            showPasswordStrength.textContent = "STRONG";
            showPasswordStrength.style.color = "#A4FFAF";
            showPasswordStrength.classList.add("show-strength");
            break;
    }

    if(userchar.length === 0) {
        passwordInput.value = "";
        return
    }
    
    let password = "";
    for(let i = 0; i < passwordRangeBar.value; i++) {
        let randomNum = Math.floor(Math.random() * userchar.length);
        password += userchar[randomNum]
    }

    passwordInput.value = password;
}

// 事件处理，获取数据！

copyBtn.addEventListener("click", e => {
    const passwordToCopy = passwordInput.value;

    if(!passwordToCopy) return;

    navigator.clipboard.writeText(passwordToCopy)
        .then(() => {
            showCopiedText.classList.add("show-copied")
        })
})

passwordRangeBar.addEventListener("input", e => {
    const min = e.target.min;
    const max = e.target.max;
    const value = e.target.value;

    const percentage = (value - min) / (max - min) * 100;
    e.target.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171f ${percentage}%)`;
    passwordLengthText.textContent = value;

})

generateBtn.addEventListener("click", e => {

    showCopiedText.classList.remove("show-copied");
    showPasswordStrength.classList.remove("show-strength");
    showStrength.forEach(elem => elem.classList.remove("strength"));

    Passwordcreater();
})