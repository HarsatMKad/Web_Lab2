class Task {
   title;
   bodyTask;

   constructor(title, bodyTask) {
      this.title = title;
      this.bodyTask = bodyTask;
  }
}

loadTasks();

function loadTasks(){
   let taskListData = JSON.parse(localStorage.taskList);
   const tasksList = document.getElementById("tasks_list");

   if(taskListData.length == 0) {
      tasksList.innerHTML += `
   <div class="zero_task_message">
        <hr class="separate_line">
        <H2 class="zero_task_message_text">No tasks</H2>
        <hr class="separate_line">
    </div>
   `;
   } else {
      for(let i = 0; i < taskListData.length; i++){
         tasksList.innerHTML += `
         <div class="task">
            <div class="task_text_area"> 
               <div class="head_text_stile">` + taskListData[i].title + `</div>
               <p class="sub_text_stile">` + taskListData[i].bodyTask + `</p>
            </div>
            <button onclick="showDelAlert(` + i + `)" class="dell_button">X</button>
         </div>
         `;
      }
   }
}

function addFn() {
   var title = document.getElementById("title_tasks_input").value
   var body = document.getElementById("body_tasks_input").value

   if(title != "" && body != ""){
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