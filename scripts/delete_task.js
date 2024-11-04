function showDelAlert(index){
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = `
        <div class="blur_del">
            <div class="alert_box">
                Delete this task ?
                <div class="del_button_section">
                    <button id="choice_button_yes" class="choice_button">Yes</button>
                    <button id="choice_button_no" class="choice_button">No</button>
                </div>
            </div>
        </div>
    `;

    alertSection.querySelector("#choice_button_yes").addEventListener("click", () => delTask(index))
    alertSection.querySelector("#choice_button_no").addEventListener("click", closeAlert)
}

function delTask(index){
    let taskList = JSON.parse(localStorage.taskList);
    taskList.splice(index, 1);
    setTasksForStorage(taskList);
    location.reload();
 }