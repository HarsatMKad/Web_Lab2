function addFn() {
   const tasksList = document.getElementById("tasks_list");
   tasksList.innerHTML += `
<div class="task">
   <div class="task_text_area"> 
      <div class="head_text_stile">TitleTitleTitleTitleTitleTitleTitleTitle</div>
      <p class="sub_text_stile">Task body about this task...</p>
   </div>
   <button class="dell_button">X</button>
</div>
`;
}