class Task {
   title;
   bodyTask;

   constructor(title, bodyTask) {
      this.title = title;
      this.bodyTask = bodyTask;
   }
}

let showInteractButtonKey = -1;

if(getTasksFromStorage() === null){
   let arr = []
   setTasksForStorage(arr);
}

loadTasks();

function loadTasks() {
   let taskListData = getTasksFromStorage();
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
      taskListData.forEach((element, index) => {
         tasksList.innerHTML += `
         <div>
            <div class="task">
               <div class="task_text_area"> 
                  <div class="head_text_stile">${element.title}</div>
                  <p class="sub_text_stile">${element.bodyTask}</p>
               </div>
               <button id="delButton" class="del_button">X</button>
            </div>
            <div class="task_interact_buttons" id="interact_button_${index}"></div>
         </div>
         `;
      })
   }
}
