class Task {
   title;
   bodyTask;

   constructor(title, bodyTask) {
      this.title = title;
      this.bodyTask = bodyTask;
   }
}

let showInteractButtonKey = -1;

if(JSON.parse(localStorage.getItem('taskList')) == null){
   let arr = []
   localStorage.setItem("taskList", JSON.stringify(arr));
}

loadTasks();

document.querySelector(".add_button").addEventListener("click", addTask);

function loadTasks() {
   let taskListData = JSON.parse(localStorage.getItem('taskList'));
   const tasksList = document.getElementById("tasks_list");

   if (taskListData.length === 0) {
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
               <div class="task_text_area"> 
                  <div class="head_text_stile">${taskListData[i].title}</div>
                  <p class="sub_text_stile">${taskListData[i].bodyTask}</p>
               </div>
               <button id="delButton" class="del_button">X</button>
            </div>
            <div class="task_interact_buttons" id="interact_button_${i}"></div>
         </div>
         `;
      }
   }
}

document.querySelectorAll('.task_text_area').forEach((element, index) => {
   element.addEventListener('click', () => {
      if (showInteractButtonKey !== -1) {
         let oldButtonsSection = document.getElementById("interact_button_" + showInteractButtonKey);
         oldButtonsSection.innerHTML = ``;
      }

      let buttonsSection = document.getElementById("interact_button_" + index);

      if (showInteractButtonKey === index) {
         showInteractButtonKey = -1;
         buttonsSection.innerHTML = ``;
      } else {
         showInteractButtonKey = index;
         
         buttonsSection.innerHTML = `
         <button class="interact_button" id="editButton"><img class="button_icon_scale" src="../images/edit_button_icon.svg" alt=""></button>
         <button class="interact_button">i</button>
         <button class="interact_button" id="shareButton"><img class="button_icon_scale" src="../images/share_button_icon.svg" alt=""></button>
         `;

         buttonsSection.querySelector("#editButton").addEventListener("click", () => {
            showEditTask(index);
         });

         buttonsSection.querySelector("#shareButton").addEventListener("click", () => {
            showShareWindow();
         });
      }
   });

   document.querySelectorAll('#delButton').forEach((element, index) => {
      element.addEventListener('click', () => {
         showDelAlert(index);
      });
   });
});

function addTask() {
   let title = document.getElementById("title_tasks_input").value
   let body = document.getElementById("body_tasks_input").value

   if (title != "" && body != "") {
      let taskList = JSON.parse(localStorage.getItem('taskList'));
      let tast = new Task(title, body);
      taskList.push(tast);
      localStorage.setItem("taskList", JSON.stringify(taskList));

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