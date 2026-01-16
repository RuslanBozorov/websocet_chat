const socket = io("http://10.10.2.132:4545")
socket.on("connect",()=>{
    console.log("Backend ulandi");  
})


sendMsg.addEventListener("click",(e)=>{
e.preventDefault();
socket.emit("xabar",sendText.value)
console.log(sendText.value);
})


socket.on("send-msg",text => {
    messages.innerHTML += `<li class="msg"><span class="ac"></span>${text}</li>`
    // sendText.value = "";

})



