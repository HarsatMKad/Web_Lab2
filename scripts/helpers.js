function getTasksFromStorage() {
    const result = JSON.parse(localStorage.getItem('taskList'));
    return result
}

function setTasksForStorage(newTaskList){
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
}