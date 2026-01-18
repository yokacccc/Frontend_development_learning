// 获取节点
const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".bill__options button");
const customTipInput = document.getElementById("custom-input");
const peopleInput = document.querySelector(".bill__people-of-number");
const tipPerPersonDisplay = document.getElementById("tip-per-person");
const totalPerPersonDisplay = document.getElementById("total-per-person");
const errorMessage = document.querySelector(".bill__error-message");
const resetButton = document.querySelector(".results__reset-button button");

// 主变量
let billAmount = 0;
let numberOfPeople = 0;
let tipPercentage = 0;

// 主函数
function calculatorAndUpdate(){
    // 获取input字符串用来比较用户是否输入
    let billStr = billInput.value;
    let peopleStr = peopleInput.value;

    // 设置显示有效值
    if(billStr === "" || peopleStr === "" || tipPercentage < 0) {
        tipPerPersonDisplay.textContent = "$0.00";
        totalPerPersonDisplay.textContent = "$0.00";
        return;
    } else if(Number(peopleStr) === 0) {
        tipPerPersonDisplay.textContent = "$0.00";
        totalPerPersonDisplay.textContent = "$0.00";
        return;
    }

    // 主计算
    let tipamount = (billAmount * tipPercentage) / numberOfPeople;
    let total = (billAmount * tipPercentage + billAmount) / numberOfPeople;

    // 主显示
    tipPerPersonDisplay.textContent = "$" + tipamount.toFixed(2);
    totalPerPersonDisplay.textContent = "$" + total.toFixed(2);
}

// 主要获取数据事件
billInput.addEventListener("input", e => {
    billAmount = Number(e.target.value);
    calculatorAndUpdate()
})

tipButtons.forEach(btn => {
    btn.addEventListener("click", e => {

        if(btn.classList.contains("selected")){
            // 如果用户再次点击同一个按钮，移除这个按钮类（用户视觉取消已选选项）
            btn.classList.remove("selected");
            // 归零tip值
            tipPercentage = 0;
            // 用户输入值归零
            customTipInput.value = "";
        } else {
            // 点击按钮预移除class
            tipButtons.forEach(b => b.classList.remove("selected"));
            // 显示设置
            btn.classList.add("selected");

            // 获取数据
            tipPercentage = Number(btn.textContent.replace("%", "")) / 100;
            // 用户使用tips按钮互拆设置 ———— 客户输入tip内容为空
            customTipInput.value = "";
        }
        
        calculatorAndUpdate();
    })
})

customTipInput.addEventListener("input", e => {
    tipPercentage = Number(e.target.value) / 100;
    // 移除按钮显示样式
    tipButtons.forEach(b => b.classList.remove("selected"));

    if(Number(customTipInput.value) < 0) {
        numberOfPeople = 0;
        customTipInput.value = "";
    }

    calculatorAndUpdate();
})

peopleInput.addEventListener("input", e => {   

    // 重置错误状态
    errorMessage.classList.remove("error-show");
    peopleInput.classList.remove("error")

    // 设置输入人数为0时提示错误
    const peopleString = e.target.value.trim();
    const people = Number(e.target.value);

    if (people < 0 || peopleString === "") {
        numberOfPeople = 0;
        peopleInput.value = "";
    } else if (people === 0) {
        errorMessage.classList.add("error-show");
        peopleInput.classList.add("error")
    } else {
        numberOfPeople = Number(e.target.value);
    }
    
    calculatorAndUpdate();
})

resetButton.addEventListener("click", e => {
    billInput.value = "";

    tipButtons.forEach(b => b.classList.remove("selected"));
    customTipInput.value = "";
    tipPercentage = 0;

    peopleInput.value = "";

    calculatorAndUpdate()
})