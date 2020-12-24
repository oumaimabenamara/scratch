// SELECTORS
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');

// EVENTLISTENERS
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
        OPTION.addEventListener('transitionend', function() {OPTION.remove();});
    }

    else (option.classList[0] === "edit_button")
    {
        const OPTION = option.parentElement;
    }


}
