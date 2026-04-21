const todoList = [
  {name: 'make dinner', dueDate: '2022-12-22'},
  {name: 'wash dishes', dueDate: '2022-12-23'}
];

function renderTodoList() {
  let todoListHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i] ;
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  }
  document.querySelector('.js-todo-list ').innerHTML = todoListHtml;
}

function addTodo() {
  const todoInputElement = document.querySelector('.js-todo-input');
  const dueDateElement = document.querySelector('.js-due-date');
  const name = todoInputElement.value;
  const dueDate = dueDateElement.value;
  todoList.push({name, dueDate});

  todoInputElement.value = '';
  dueDateElement.value = '';
  renderTodoList();
}