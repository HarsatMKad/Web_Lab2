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
 