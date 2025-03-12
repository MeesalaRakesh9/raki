document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Load tasks from localStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      todoList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${task.text}
          <button onclick="removeTask(${index})">Remove</button>
        `;
        todoList.appendChild(li);
      });
    }
  
    // Add new task
    addButton.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
      if (taskText === '') return;
  
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push({ text: taskText });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      todoInput.value = '';
      loadTasks();
    });
  
    // Remove task
    window.removeTask = (index) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks();
    };
  
    // Initial load
    loadTasks();
  });
  