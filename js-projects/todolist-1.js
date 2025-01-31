const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}

for (let i = 1; i <= 5; i++) {
  console.log('hello' + ' rolake');
}

let i = 1;

while (i <= 7) {
  console.log('rolly $');
  i++;
}