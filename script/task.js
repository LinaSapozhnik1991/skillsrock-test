document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('filterAll').addEventListener('click', () => filterTasks('all'));
document.getElementById('filterCompleted').addEventListener('click', () => filterTasks('completed'));
document.getElementById('filterUncompleted').addEventListener('click', () => filterTasks('uncompleted'));

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Введите текст задачи!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
   
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем выполнение события клика на li
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
  
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('li');
    tasks.forEach(task => {
        if (filter === 'completed' && !task.classList.contains('completed')) {
            task.style.display = 'none';
        } else if (filter === 'uncompleted' && task.classList.contains('completed')) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    });
}





