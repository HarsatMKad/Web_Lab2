class Task {
   title;
   bodyTask;

   constructor(title, bodyTask) {
      this.title = title;
      this.bodyTask = bodyTask;
   }
}

let showInteractButtonKey = -1;

loadTasks();

function loadTasks() {
   let taskListData = JSON.parse(localStorage.taskList);
   const tasksList = document.getElementById("tasks_list");

   if (taskListData.length == 0) {
      tasksList.innerHTML += `
      <div class="zero_task_message">
         <hr class="separate_line">
         <H2 class="zero_task_message_text">No tasks</H2>
         <hr class="separate_line">
      </div>
   `;
   } else {
      for (let i = 0; i < taskListData.length; i++) {
         tasksList.innerHTML += `
         <div>
            <div class="task">
               <div onclick="showInteractButton(` + i + `)" class="task_text_area"> 
                  <div class="head_text_stile">` + taskListData[i].title + `</div>
                  <p class="sub_text_stile">` + taskListData[i].bodyTask + `</p>
               </div>
               <button onclick="showDelAlert(` + i + `), closeInteractButtons()" class="del_button">X</button>
            </div>
            <div class="task_interact_buttons" id="interact_button_` + i + `">
            </div>
         </div>
         `;
      }
   }
}

function closeInteractButtons() {
   let buttonsSection = document.getElementById("interact_button_" + showInteractButtonKey);
   buttonsSection.innerHTML = ``;
   showInteractButtonKey = -1;
}

function showInteractButton(index) {
   if (showInteractButtonKey != -1) {
      let oldButtonsSection = document.getElementById("interact_button_" + showInteractButtonKey);
      oldButtonsSection.innerHTML = ``;
   }

   let buttonsSection = document.getElementById("interact_button_" + index);

   if (showInteractButtonKey == index) {
      showInteractButtonKey = -1
      buttonsSection.innerHTML = ``;
   } else {
      showInteractButtonKey = index;

      buttonsSection.innerHTML = `
      <button class="interact_button" onclick="showEditTask(` + index + `)"><img class="button_icon_scale" src="../images/edit_button_icon.svg" alt=""></button>
      <button class="interact_button">i</button>
      <button class="interact_button" onclick="showShareWondow()"><img class="button_icon_scale" src="../images/share_button_icon.svg" alt=""></button>
      `
   }
}

function addTask() {
   let title = document.getElementById("title_tasks_input").value
   let body = document.getElementById("body_tasks_input").value

   if (title != "" && body != "") {
      let taskList = JSON.parse(localStorage.taskList);
      let tast = new Task(title, body);
      taskList.push(tast);
      localStorage.setItem("taskList", JSON.stringify(taskList));

      const tasksList = document.getElementById("tasks_list");
      tasksList.innerHTML += `
   <div class="task">
      <div class="task_text_area"> 
         <div class="head_text_stile">` + title + `</div>
         <p class="sub_text_stile">` + body + `</p>
      </div>
      <button class="dell_button">X</button>
   </div>
   `;
      location.reload();
   }
}