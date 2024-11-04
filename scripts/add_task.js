document.querySelector(".add_button").addEventListener("click", addTask);

function addTask() {
    let title = document.getElementById("title_tasks_input").value
    let body = document.getElementById("body_tasks_input").value
 
    if (title != "" && body != "") {
       let taskList = getTasksFromStorage();
       let tast = new Task(title, body);
       taskList.push(tast);
       setTasksForStorage(taskList);
 
       const tasksList = document.getElementById("tasks_list");
       tasksList.innerHTML += `
       <div class="task">
          <div class="task_text_area"> 
             <div class="head_text_stile">${title}</div>
             <p class="sub_text_stile">${body}</p>
          </div>
          <button class="dell_button">X</button>
       </div>
       `;
       location.reload();
    }
 }