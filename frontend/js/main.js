const socket = io("http://127.0.0.1:4545");
const name1 = window.localStorage.getItem("name");
const allUsers = document.getElementById("allUsers");

socket.on("connect", () => {
  console.log("Backend ulandi");
});

socket.on("users", (users) => {
    console.log(users);
    
  users.forEach((item) => {
    const li = document.createElement("li");

    li.classList = "users_li";
    li.textContent = item;
    li.addEventListener("click", () => {
      const prev = allUsers.querySelector(".active");
      if (prev) {
        prev.classList.remove("active");
      }

      li.classList.add("active");
      ms_box.style.display = "block"
    });
    allUsers.append(li);
  });
});

Submitmsg.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("xabar",{
    to:selectedUserId,
    text:sendText.value
  });
  console.log(sendText.value);
});

socket.on("send-msg", (text) => {
  messages.innerHTML += `<li class="msg">${text}  <span class="time">${new Date().getHours()}:${new Date().getMinutes()}</span></li>`;
  // sendText.value = "";
});

items.forEach((li) => {
  li.addEventListener("click", () => {
    // avval hammasidan active ni olib tashlaymiz
    items.forEach((item) => item.classList.remove("active"));

    // faqat bosilganiga qo‘shamiz
    li.classList.add("active");
  });
});



profileName.innerHTML = name1;