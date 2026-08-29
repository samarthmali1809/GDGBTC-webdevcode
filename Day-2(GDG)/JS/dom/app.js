let todos = []

const input = document.querySelector("#todoInput");
const btn = document.querySelector("#addBtn");

const list =document.querySelector("#todoList");

function render(){
    list.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        list.innerHTML = list.innerHTML + "<li>" + todos[index].text +"</li>";
    }
}

function addTodo(){
    if(input.value === "") return;
    todos.push({id: Date.now(), text: input.value});
    input.value = "";
    render();
}

btn.addEventListener("click", addTodo)  