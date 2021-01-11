'use strict'
// SELECTORS
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');


  var  todos = JSON.parse(localStorage.getItem("todos")) || [];

console.log(todos);
// EVENTLISTENERS
document.addEventListener('DOMContentLoaded' , getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', doneDeleteEdit);

// FUNCTIONS
function addTodo(event)
{
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo_div");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo_item");
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem);

    // //add to localStorage
    // saveLocalStorage (todoInput.value);

    const doneButton = document.createElement("button");
    doneButton.classList.add("done_button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDiv.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    todoDiv.appendChild(editButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";

}

function doneDeleteEdit(event)
{
    event.preventDefault();
    // console.log(event.target);
    const option = event.target;
    if(option.classList[0] === "done_button")
    {
        const OPTION = option.parentElement;
        OPTION.classList.toggle("donetodo");
    }

    else if(option.classList[0] === "delete_button")
    {
        const OPTION = option.parentElement;
        OPTION.classList.add("deletetodo");
        removeTodos(OPTION);
        OPTION.addEventListener('transitionend', function() {OPTION.remove();});
    }

    else (option.classList[0] === "edit_button")
    {
        const OPTION = option.parentElement;
    }
    console.log(OPTION);

}

function saveLocalStorage (OPTION)
{  
    todos.push(OPTION);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function getTodos ()
{
    let todos;
    if (localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else 
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    console.log(todos);
    todos.forEach(function(OPTION) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo_div");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo_item");
    todoItem.innerText = OPTION;
    todoDiv.appendChild(todoItem);

    const doneButton = document.createElement("button");
    doneButton.classList.add("done_button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDiv.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    todoDiv.appendChild(editButton);

    todoList.appendChild(todoDiv);
    });
}

function removeTodos (OPTION)
{
    let todos;
    if (localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else 
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = OPTION.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
}