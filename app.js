document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form");
  const todos = document.querySelector('.todos');
  const todoAdd = document.querySelector("#todoAdd");
  const list = [];
  
  form.addEventListener("submit", function(e){
      e.preventDefault();
      makeList();
      addToStorage();
      form.reset();
      });

      function makeList(){
      const newLI = document.createElement("li");
      const deleteBtn = document.createElement("button");
      newLI.innerText = todoAdd.value; 
      deleteBtn.innerText = "Delete";
      newLI.append(deleteBtn);
      todos.append(newLI);
      }


  
      todos.addEventListener('click', function(e){
        if (e.target.tagName === "LI"){
      e.target.classList.add('done');
        } else if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        }
    })

    
    function addToStorage(){
     
      list.push({task: todoAdd.value});
      localStorage.setItem("items", JSON.stringify(list));
   }

   const savedTodos = JSON.parse(localStorage.getItem('items')) ;
  
   
   for (let i = 0; i < savedTodos.length; i++) {
    const newLI = document.createElement("li");
    const deleteBtn = document.createElement("button");
    newLI.innerText = savedTodos[i].task;
    deleteBtn.innerText = "Delete";
    newLI.append(deleteBtn);
    todos.append(newLI);
   }
    
  }) 
  
