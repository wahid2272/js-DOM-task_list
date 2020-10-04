//Defining UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

// Load all event listener
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask);
};

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Please add a task')
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create ne link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Appemd the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input
  taskInput.value = '';

  e.preventDefault();
}
