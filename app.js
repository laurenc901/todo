document.addEventListener("DOMContentLoaded", function() {

const form = document.querySelector("form");
const todos = document.querySelector('#todos');
const todoAdd = document.querySelector("#todoAdd");
let doneBtn = document.createElement("button");
let deleteBtn = document.createElement("button");
doneBtn.innerText = "Done!";
deleteBtn.innerText = "Delete";




const savedTodos = JSON.parse(localStorage.getItem("list")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newLI = document.createElement("li");
  newLI.innerText = savedTodos[i].task;
  newLI.isDone = savedTodos[i].isDone ? true : false;
  if (newLI.isDone) {
    newLI.style.textDecoration = "line-through";
  }
  
  todos.appendChild(newLI);
  newLI.append(doneBtn);
  newLI.append(deleteBtn);
}



form.addEventListener("submit", function(e){
    e.preventDefault();
    let newLI = document.createElement("LI");
    newLI.innerText = todoAdd.value;
    savedTodos.push({ task: newLI.innerText, isDone: false });
  localStorage.setItem("list", JSON.stringify(savedTodos));
    
    newLI.isDone = false;
    form.reset();
    todos.appendChild(newLI);
   
    newLI.append(doneBtn);
    newLI.append(deleteBtn);
    });


   
      todos.addEventListener('click', function(e){
        if (e.target === doneBtn){
      e.target.parentElement.style.textDecoration = 'line-through';
      e.target.isDone = true;
        }
        if (e.target === deleteBtn){
        e.target.parentElement.remove();
        }
  });
  

})

