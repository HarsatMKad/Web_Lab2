function showDelAlert(index){
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = `
        <div class="blur_del">
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
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = ``;
}

function delTask(index){
    let taskList = JSON.parse(localStorage.taskList);
    taskList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    location.reload();
 }