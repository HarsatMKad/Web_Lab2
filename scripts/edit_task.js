function showEditTask(index){
    let taskListd = JSON.parse(localStorage.taskList);

    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = `
        <div class="blur_background">
            <div class="edit_box">
                <input class="head_input" id="edit_input_title_task" type="text" placeholder="Title..." value="` + taskListd[index].title + `"></input>
                <textarea class="body_input" id="edit_input_body_task" type="text" placeholder="About...">` + taskListd[index].bodyTask + `</textarea>

                <div>
                    <button id="edit_button_cancel" class="edit_button">Cancel</button>
                    <button id="edit_button_save" class="edit_button">Save</button>
                </div>
            </div>
        </div>
    `;

    alertSection.querySelector("#edit_button_cancel").addEventListener("click", closeAlert)
    alertSection.querySelector("#edit_button_save").addEventListener("click", () => editTask(index))
}

function editTask(index){
    let newTitleValue = document.getElementById("edit_input_title_task").value;
    let newBodyValue = document.getElementById("edit_input_body_task").value;

    let taskList = JSON.parse(localStorage.taskList);
    taskList[index].title = newTitleValue;
    taskList[index].bodyTask = newBodyValue;
    
    setTasksForStorage(taskList);
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = ``;
    location.reload();
}