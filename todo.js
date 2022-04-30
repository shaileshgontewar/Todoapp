//
let todoItems = [];
let currentChange;
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

function popUp() {
  var blurPage;
  if (flag) {
    blurPage = document.getElementById("blur");
  } else {
    blurPage = document.getElementById("blur-2");
  }
  // blurPage.classList.add("blur");
  blurPage.classList.toggle("active");
  addNewList.classList.toggle("addNewListActive");
}

addListBtn.addEventListener("click", function () {
  popUp();
  initial();
  // addNewList.style.display = "block";
  // blur.classList.add("blur");
  document.getElementById("notodo").style.display = "none";
});

// ***************** new *******************
function createTask() {
  initial();
  const newCard = document.getElementById("list-container");

  var child = newCard.lastElementChild;
  while (child) {
    newCard.removeChild(child);
    child = newCard.lastElementChild;
  }

  for (let i = 0; i < todoItems.length; i++) {
    const node = document.createElement("div");
    node.setAttribute("class", "card");
    node.setAttribute("data-key", todoItems[i].id);
    node.innerHTML = `<p class="card-heading">${todoItems[i].heading}</p>
  
    <ul style="list-style-type: none"></ul>
    <div class="footer">
      <span class=" material-icons removeTask" onclick="removeToDo(this)" >delete</span>
     <span class=" material-icons addTask" onclick="toggleAddItem(this)" style="color:blue;">add_circle</span>
    </div>`;
    newCard.append(node);
    let currentTodo = todoItems[i];
    for (let j = 0; j < currentTodo.subTask.length; j++) {
      let;
    }
  }
}

function removeToDo(e) {
  let tempE = e.parentNode.parentNode;
  console.log(tempE);
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == tempE.getAttribute("data-key")) {
      todoItems.splice(i, 1);
    }
  }
  if (!flag) {
    goBack();
  } else {
    tempE.parentNode.removeChild(tempE);
    initial();
  }
}

function toggleAddItem(item) {
  currentChange = item;
  var blurPage;
  if (flag) {
    blurPage = document.getElementById("blur");
  } else {
    blurPage = document.getElementById("blur-2");
  }
  blurPage.classList.add("blur");
  var popup = document.getElementById("popAddItem");
  popup.classList.toggle("active");
}

function addSubTodo() {
  let taskHeading = document.getElementById("subListHeading").value;
  console.log(taskHeading);
  if (taskHeading !== "") {
    let list;
    if (flag) {
      list = currentChange.parentNode.parentNode.childNodes[2];
    } else {
      list = currentChange.parentNode.parentNode.childNodes[3];
    }
    // console.log(currentChange.parentNode, currentChange.parentNode.parentNode);
    let id = currentChange.parentNode.parentNode.getAttribute("data-key");
    // console.log(currentChange.parentNode.parentNode);
    let node = document.createElement("li");
    node.setAttribute("class", flag ? `card-item` : `card-item-2`);
    node.setAttribute("data-key", Date.now());
    node.innerHTML = `${taskHeading}  <button class="markDone" onclick="markCompeleted(this)">mark done</button>`;
    list.append(node);
    toggleAddItem();
  }
}
function markCompeleted(e) {
  let classPutLine = flag
    ? "card-item card-item-check"
    : "card-item-2 card-item-check";
  e.parentNode.setAttribute("class", classPutLine);

  e.parentNode.removeChild(e);
}
function addTodo() {
  let heading = document.getElementById("listText").value;
  if (heading !== "") {
    const todo = {
      heading,
      completed: false,
      subTask: [],
      id: Date.now(),
    };
    todoItems.push(todo);
    popUp();
    goBack();
  }
}

function goBack() {
  flag = true;
  createTask();
}

// ! ------------------ old --------------------------------------
// addList.addEventListener("click", () => {
//   popUp();
//   blur.classList.remove("blur");

//   let card = document.createElement("div");
//   card.classList.add("task");
//   console.log("add");
//   flex.appendChild(card);

//   let cardHeader = document.createElement("div");
//   cardHeader.classList.add("cardHeader");
//   card.appendChild(cardHeader);

//   let newListTitle = document.createElement("h2");
//   newListTitle.classList.add("task-title");
//   newListTitle.style.color = "tomato";
//   newListTitle.innerHTML = `${listText.value}`;
//   cardHeader.appendChild(newListTitle);

//   let line = document.createElement("hr");
//   line.classList.add("line");
//   cardHeader.appendChild(line);
//   //! new list ....
//   //New Task
//   let newTaskBody = document.createElement("div");
//   newTaskBody.classList.add("task-body");
//   newTaskBody.innerHTML = `
//   <div class="btn-listbody">
//       <span class=" material-icons removeTask" style="color:blue;">delete</span>
//       <span class=" material-icons addTask">add_circle</span>
//     </div>
//   `;

//   card.appendChild(newTaskBody);
//   addNewList.style.display = "none";
// });
