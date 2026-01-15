document.addEventListener("DOMContentLoaded", () =>{

    const btnGroup = document.querySelectorAll(".user-primary__time-control button");
    
    const cardTitle = document.querySelectorAll(".card__title");
    const currentText = document.querySelectorAll(".current");
    const previousText = document.querySelectorAll(".previous");

    const timeFrameMsg = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month"
    };
    
    const weeklyBtn = document.querySelector(".user-primary__weekly-control");
    if(weeklyBtn){
        weeklyBtn.classList.add("active")
    }
    else{
        console.error("没有找到weekly按钮...请检查选择器是否正确！")
    };

    btnGroup.forEach(btn => { 
        btn.addEventListener("click", function(){
            btnGroup.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            loadAndUpdateData();
        })
    })

    async function loadAndUpdateData() {
        try {
            const activeBtn = document.querySelector(".user-primary__time-control button.active");
            if(!activeBtn) return;

            const selectedTimeframe = activeBtn.classList.contains("user-primary__daily-control") ? "daily" :
                                      activeBtn.classList.contains("user-primary__weekly-control") ? "weekly" :
                                      "monthly";

            const response = await fetch("./data.json");
            if(!response.ok) throw new Error("Failed to load data.json");
            const data = await response.json();
            updateCards(data, selectedTimeframe);
        } catch (error) {
            console.error(`没有正确解析数据: ${error}`);
        }
    }

    function updateCards(data, selectedTimeframe){
        cardTitle.forEach((title, index) => {
            const type = title.textContent.trim().toLowerCase();
            const matchingItem = data.find(item => item.title.toLowerCase() === type);
            if(matchingItem){
                const currentHours = matchingItem.timeframes[selectedTimeframe].current;
                const previousHours = matchingItem.timeframes[selectedTimeframe].previous;
                const prevMsg = `${timeFrameMsg[selectedTimeframe]} - ${previousHours}hrs`;

                currentText[index].textContent = `${currentHours}hrs`;
                previousText[index].textContent = prevMsg;
            }
            
        })
    }
    
    loadAndUpdateData();

})