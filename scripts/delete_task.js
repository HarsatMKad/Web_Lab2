
function showDelAlert(index){
    const tasksList = document.getElementById("del_alert");
    tasksList.innerHTML = `
        <div class="blur_background" >
            <div class="alert_box">
                Delete this task ?
                <div class="del_button_section">
                    <button onclick="delTask(` + index + `)" class="choice_button">Yes</button>
                    <button onClick="fewf()" class="choice_button">No</button>
                </div>
            </div>
        </div>
    `;
}

function fewf(){
    const tasksList = document.getElementById("del_alert");
    tasksList.innerHTML = ``;
}

function delTask(index){
    let taskListData = JSON.parse(localStorage.taskList);
    taskListData.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskListData));
    location.reload();
 }