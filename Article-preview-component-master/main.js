// 获取原页面的分享按钮
const btnShareMeidaOpen = document.getElementById("share-btn");
// 获取弹出社交媒体滑动窗口
const popUpwindow = document.querySelector(".pop-up_window");
// 获取弹出社交媒体返回按钮
const btnShareMediaReturn = document.getElementById("share-btn-return")


// 添加点击事件
btnShareMeidaOpen.addEventListener("click", function(e){
    e.stopPropagation();
    popUpwindow.classList.toggle("active")
})

// 添加点击返回事件
btnShareMediaReturn.addEventListener("click", function(){
    popUpwindow.classList.toggle("active")
})

document.addEventListener("click", function(e) {
    if (!popUpwindow.contains(e.target) && e.target !== btnShareMeidaOpen) {
        popUpwindow.classList.remove("active")
    }
})