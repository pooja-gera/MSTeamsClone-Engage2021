let chatInput = document.querySelector(".send-msg")
let chatSendBtn = document.querySelector("#send-message-btn");
let msgArea = document.querySelector(".texts-display-area");
let chatDiv = document.querySelector(".chat-area");

chatSendBtn.addEventListener("click", function () {
    socket.emit('message', chatInput.value, userName);
})

socket.on('createMessage', (message, Name) => {
    let otherClsss = userName != Name ? "other-msg" : "my-msg"
    let chatClsss = userName != Name ? "other-chat-msg" : "my-chat-msg"
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("msg")
    chatDiv.classList.add(otherClsss)
    chatDiv.innerHTML = `<div class="msg-name">${Name}</div>
    <div class="msg-msg ${chatClsss}">${message}</div>`;
    msgArea.appendChild(chatDiv)
    chatDiv.scrollTo(0,chatDiv.scrollHeight)
    console.log("object");
    chatDiv = document.querySelector(".chat-area");
    chatDiv.scrollTo(0, chatDiv.scrollHeight);
})

chatInput.addEventListener("keyup", function (e) {
    if(e.key=="Enter") {
        socket.emit('message', chatInput.value, userName);
    }
});