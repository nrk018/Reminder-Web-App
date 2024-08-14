document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const taskNameInput = document.getElementById('taskName');
    const descriptionInput = document.getElementById('description');
    const deadlineInput = document.getElementById('deadline');
    const list = document.getElementById('list');

    // Initialize Flatpickr
    flatpickr(deadlineInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        defaultDate: new Date(),
        theme: "dark" // You can use "light" or any other theme available in Flatpickr
    });

    // Load tasks from localStorage on page load
    loadTasksFromLocalStorage();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = taskNameInput.value.trim();
        const description = descriptionInput.value.trim();
        const deadline = deadlineInput.value;

        if (taskName === '') {
            alert('Please enter a reminder');
            return;
        }

        const task = {
            taskName,
            description,
            deadline,
            completed: false,
        };

        addTaskToList(task);
        saveTaskToLocalStorage(task);

        taskNameInput.value = '';
        descriptionInput.value = '';
        deadlineInput.value = '';
    });

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

        const taskNameEl = document.createElement('span');
        taskNameEl.className = 'task-name';
        taskNameEl.textContent = task.taskName;

        const taskDeadlineEl = document.createElement('span');
        taskDeadlineEl.className = 'task-deadline';
        taskDeadlineEl.textContent = task.deadline ? `Due: ${task.deadline}` : '';

        taskDetails.appendChild(taskNameEl);
        if (task.description) {
            const taskDescriptionEl = document.createElement('span');
            taskDescriptionEl.className = 'task-description';
            taskDescriptionEl.textContent = task.description;
            taskDetails.appendChild(taskDescriptionEl);
        }
        taskDetails.appendChild(taskDeadlineEl);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            li.remove();
            deleteTaskFromLocalStorage(task);
        });

        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            li.classList.toggle('completed');
            updateTaskInLocalStorage(task);
        });

        li.appendChild(checkbox);
        li.appendChild(taskDetails);
        li.appendChild(deleteButton);

        list.appendChild(li);
    }

    function saveTaskToLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToList(task);
        });
    }

    function updateTaskInLocalStorage(updatedTask) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(task => {
            if (task.taskName === updatedTask.taskName && task.deadline === updatedTask.deadline) {
                return updatedTask;
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTaskFromLocalStorage(taskToDelete) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => !(task.taskName === taskToDelete.taskName && task.deadline === taskToDelete.deadline));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});