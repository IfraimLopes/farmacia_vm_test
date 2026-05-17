const chatBtn = document.querySelector(".chat-btn");
const chatBox = document.querySelector(".chat-box");

chatBtn.addEventListener("click", () => {
    chatBox.classList.toggle("active");

    if(chatBox.classList.contains("active")){
        chatBox.style.display = "flex";
    } else {
        chatBox.style.display = "none";
    }
});