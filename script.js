let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    let task = {
        text: input.value,
        completed: false
    };

    tasks.push(task);
    input.value = "";
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div class="btn-group">
                <button onclick="completeTask(${index})">✓</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    let newTask = prompt("Edit Task", tasks[index].text);

    if (newTask) {
        tasks[index].text = newTask;
        renderTasks();
    }
}