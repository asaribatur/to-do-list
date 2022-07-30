const ul_DOM = document.getElementById("list");
const toastLive = document.getElementById("liveToast");
const toastTitle_DOM = document.querySelector("#toast-title");
const toastMsg_DOM = document.querySelector(".toast-body");
const toastImg_DOM = document.querySelector("#toast-img");

function formHandler(event) {
  event.preventDefault();
  newElement();
}

function newElement() {
  const newTask = document.querySelector("#task");
  if (newTask.value.trim()) {
    const li_DOM = document.createElement("li");
    li_DOM.innerHTML = `${newTask.value}<button type="button" onclick="deleteItem(this)" class="btn-close float-end" aria-label="Close"></button>`;
    li_DOM.setAttribute("onclick", "changeCls(this)");
    ul_DOM.appendChild(li_DOM);
    toastImg_DOM.setAttribute("src", "img/emoji-smile-upside-down.svg");
    toastTitle_DOM.classList.remove("text-danger");
    toastTitle_DOM.classList.add("text-success");
    toastTitle_DOM.innerText = "Bingo!";
    toastMsg_DOM.innerText = "Görev başarıyla listeye eklendi.";
    btnMarkAll.disabled = false;
  } else {
    toastImg_DOM.setAttribute("src", "img/emoji-dizzy.svg");
    toastTitle_DOM.classList.remove("text-success");
    toastTitle_DOM.classList.add("text-danger");
    toastTitle_DOM.innerText = "O.. oooo!..";
    toastMsg_DOM.innerText = "Olmayan bir görevi yapamazsın";
  }
  const toast = new bootstrap.Toast(toastLive);
  toast.show();
  newTask.value = "";
}

function changeCls(obj) {
  obj.classList.toggle("checked");
}

function deleteItem(item) {
  item.parentNode.remove();
}

// Şayet querySelectorAll("li") deseydik yalnızca statik elementleri alırdı
let liCollection = document.getElementsByTagName("li");
const btnMarkAll = document.querySelector("#btnMarkAll");

function markAll() {
  if (btnMarkAll.innerText == "Günü Kurtardım") {
    for (let i = liCollection.length - 1; i >= 0; --i) {
      liCollection[i].classList.add("checked");
    }
    btnMarkAll.classList.remove("btn-success");
    btnMarkAll.classList.add("btn-secondary");
    btnMarkAll.innerText = "Nerdeeee :(";
  } else {
    for (let i = liCollection.length - 1; i >= 0; --i) {
      liCollection[i].classList.remove("checked");
    }
    btnMarkAll.classList.remove("btn-secondary");
    btnMarkAll.classList.add("btn-success");
    btnMarkAll.innerText = "Günü Kurtardım";
  }
}

function deleteTaskList() {
  let text =
    "UYARI!\nListenin tamamı silinecek. Bu işlem geri alınamaz. Emin misiniz?";
  if (confirm(text)) {
    const btnDeleteAll = document.querySelector("#btnDelAll");
    for (let i = liCollection.length - 1; i >= 0; --i) {
      liCollection[i].remove();
    }
    btnMarkAll.disabled = true;
  }
}
