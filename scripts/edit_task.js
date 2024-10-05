function showEditTask(index){
    let taskListd = JSON.parse(localStorage.taskList);

    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = `
        <div class="blur_background">
            <div class="edit_box">
                <input class="head_input" id="edit_input_title_task" type="text" placeholder="Title..." value="` + taskListd[index].title + `"></input>
                <input class="body_input" id="edit_input_body_task" type="text" placeholder="About..." value="` + taskListd[index].bodyTask + `"></input>

                <div>
                    <button onclick="cancelButton()" class="edit_button">Cancel</button>
                    <button onclick="editTask(` + index + `)" class="edit_button">Save</button>
                </div>
            </div>
        </div>
    `;
}

function cancelButton() {
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = ``;
}

function editTask(index){
    let newTitleValue = document.getElementById("edit_input_title_task").value;
    let newBodyValue = document.getElementById("edit_input_body_task").value;

    let taskList = JSON.parse(localStorage.taskList);
    taskList[index].title = newTitleValue;
    taskList[index].bodyTask = newBodyValue;

    localStorage.setItem("taskList", JSON.stringify(taskList));
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = ``;
    location.reload();
}