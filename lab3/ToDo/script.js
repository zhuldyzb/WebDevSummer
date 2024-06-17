document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                taskItem.classList.add('task-done');
            } else {
                taskItem.classList.remove('task-done');
            }
        });

        const taskControls = document.createElement('div');
        taskControls.classList.add('task-controls');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.classList.add('task-text');
        taskControls.appendChild(taskTextSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });
        taskControls.appendChild(deleteButton);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskControls);

        return taskItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    addTaskBtn.addEventListener('click', addTask);
});
