
document.addEventListener("DOMContentLoaded", function(){
    
    // 获取所有的DOM元素
    const form = document.querySelector("form");    // form表单
    const emailInput = document.getElementById("address"); // 输入框
    const errorText = document.getElementById("signUpErrorText"); //提示错误文字
    const signUp = document.getElementById("signUp"); // 获取signup页面
    const success = document.getElementById("success"); // 获取success页面
    const strongtext = document.querySelector("strong") // 获取strong标签

    // 获取success按钮
    const successBtn = document.querySelector(".success-page__button--dismiss")

    // 设置邮箱正则表达式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener("input", ()=>{
        emailInput.classList.remove("error"); // 提交前去掉默认红色提示样式
        errorText.style.display = "none";  // 提交前默认消除错误文字       
    })

    // 监听表单提交事件
    form.addEventListener("submit", event => {
        event.preventDefault(); // 禁止表单默认

        const email = emailInput.value.trim();

        if(emailRegex.test(email)){
            strongtext.textContent = email;
            signUp.classList.add("is-hidden");
            success.classList.remove("is-hidden");
        } else {
            emailInput.classList.add("error");
            errorText.style.display = "inline-block";
        }
    })

    successBtn.addEventListener("click", () => {
        signUp.classList.remove("is-hidden");
        success.classList.add("is-hidden");
    })
})


