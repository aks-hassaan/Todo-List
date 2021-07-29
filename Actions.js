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
    console.log("inside else");
    //creating all elements
    var listItem = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    var deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTask;

    var newTodoText = document.createTextNode(newTodo);

    //adding check box ,delete button and todo tex to li
    listItem.appendChild(newTodoText);
    listItem.appendChild(checkBox);
    listItem.appendChild(deleteButton);
    var list = document.getElementById("taskList");
    list.appendChild(listItem);
    console.log("exiting else");
    // var todos = document.getElementById("taskList");
    // var newTodoText = document.createTextNode(newTodo);
    // var newLi = document.createElement("li");
    // newLi.appendChild(newTodoText);
    // todos.appendChild(newLi);
  }
}

function deleteTask() {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}
