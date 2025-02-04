const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearAllTask = document.getElementById('clearAllTask');
const displayAlert = document.getElementById('displayAlert');
addButton.addEventListener('click',addTask);


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button class='delete' onclick='removeTask(this)'>X</button>`;
  taskList.appendChild(li) =taskInput.value = "";
  
}

function removeTask(button) {
  button.parentElement.remove();
}
      
      
    

