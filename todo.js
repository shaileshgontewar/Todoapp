//
const container = document.querySelector(".container");
const blur = document.querySelector("#blur");
const addNewList = document.getElementById("addNewList");
const addListBtn = document.getElementById("addBtn");
const addList = document.getElementById("addList");
const flex = document.getElementById("list-container");
const listText = document.getElementById("listText");
const notodo = document.getElementById("notodo");
let flag = true;

function initial() {
  if (flag) {
    document.getElementById("blur-2").style.display = "none";
    addNewList.style.display = "block";
  } else {
    addNewList.style.display = "none";
    document.getElementById("blur-2").style.display = "block";
  }
}
initial();

function popUp() {}
addListBtn.addEventListener("click", function () {
  addNewList.classList.toggle("addNewListActive");
  addNewList.style.display = "block";
  blur.classList.add("blur");
  document.getElementById("notodo").style.display = "none";
});

addList.addEventListener("click", () => {
  blur.classList.remove("blur");
  let card = document.createElement("div");
  card.classList.add("task");
  console.log("add");
  flex.appendChild(card);

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("cardHeader");
  card.appendChild(cardHeader);

  let newListTitle = document.createElement("h2");
  newListTitle.classList.add("task-title");
  newListTitle.style.color = "tomato";
  newListTitle.innerHTML = `${listText.value}`;
  cardHeader.appendChild(newListTitle);

  let line = document.createElement("hr");
  line.classList.add("line");
  cardHeader.appendChild(line);

  //! new list ....

  //New Task
  let newTaskBody = document.createElement("div");
  newTaskBody.classList.add("task-body");
  newTaskBody.innerHTML = `
  <div class="btn-listbody">
      <span class=" material-icons removeTask" style="color:blue;">delete</span>
      <span class=" material-icons addTask">add_circle</span>
    </div>
  `;

  card.appendChild(newTaskBody);
  addNewList.style.display = "none";
});
