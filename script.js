const newMessage = ` 
<div class="row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
  <h6>John Doe</h6>
  <p>
    New message
  </p>
</div>
<span class="delete">✖</span>
</div>
`;

// document.querySelector("#msg-container").innerHTML += newMessage;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector("#footer").innerHTML += `<span id="date">${date}</span>`;

for (let i = 0; i < document.querySelectorAll(".row").length; i++) {
  let messagesCount = document.querySelectorAll("p").length;
  document.querySelector("#count").textContent = messagesCount;
  document
    .querySelectorAll(".delete")
    [i].addEventListener("click", function () {
      this.parentNode.remove();
      messagesCount = document.querySelectorAll("p").length;
      document.querySelector("#count").textContent = messagesCount;
    });
}

document.querySelector("#btn-add").addEventListener("click", function () {
  let message = document.querySelector("#add-message").value;
  document.querySelector("#msg-container").innerHTML += `
  <div class="row">
  <img class="avatar" src="images/avatar-1.jpg" />
  <div class="text-container">
    <h6>John Doe</h6>
    <p>
      ${message}
    </p>
  </div>
  <span class="delete">✖</span>
</div>`;
  document.querySelector("#add-message").value = "";
  messagesCount = document.querySelectorAll("p").length;
  document.querySelector("#count").textContent = messagesCount;
  for (let i = 0; i < document.querySelectorAll(".row").length; i++) {
    let messagesCount = document.querySelectorAll("p").length;
    document.querySelector("#count").textContent = messagesCount;
    document
      .querySelectorAll(".delete")
      [i].addEventListener("click", function () {
        this.parentNode.remove();
        messagesCount = document.querySelectorAll("p").length;
        document.querySelector("#count").textContent = messagesCount;
      });
  }
});

document.querySelector("#btn-search").addEventListener("click", function () {
  const textToCompare = document
    .querySelector("#search-message")
    .value.toLowerCase();

  for (let i = 0; i < document.querySelectorAll("h6").length; i++) {
    const name = document.querySelectorAll("h6")[i].textContent.toLowerCase();

    if (name.includes(textToCompare)) {
      document.querySelectorAll(".row")[i].style.display = "flex";
    } else {
      document.querySelectorAll(".row")[i].style.display = "none";
    }
  }
  document.querySelector("#search-message").value = "";
});
