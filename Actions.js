window.onload = function () {
  var form = document.getElementById("form");
  // form.onsubmit = addNewTask;
};

function addNewTask(e) {
  e.preventDefault();
  var enteredValue = document.getElementById("newTodo");
  var newTodo = document.getElementById("newTodo").value;
  if (newTodo === "") alert("Field is not allow to be Empty");
  else {
    enteredValue.value = "";
    //creating all elements
    var listItem = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = handelCheckBox;

    var deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTask;

    var newTodoText = document.createTextNode(newTodo);

    //adding check box ,delete button and todo tex to li
    listItem.appendChild(checkBox);
    listItem.appendChild(newTodoText);
    listItem.appendChild(deleteButton);
    var list = document.getElementById("taskList");
    list.appendChild(listItem);
  }
}

function expandedDetails() {
  var listItem = this.parentNode;
  var para = document.createElement("p");
  para.innerHTML = "<div>This should be opened and closed on head click.</div>";
}

function handelCheckBox() {
  if (this.checked) {
    //for adding into done
    var listItem = this.parentNode;
    var doneList = document.getElementById("doneList");
    doneList.appendChild(listItem);
  } else {
    var listItem = this.parentNode;
    var taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);
  }
}

function deleteTask() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}
