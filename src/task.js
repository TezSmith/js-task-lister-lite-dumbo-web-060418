//Your task file is your model. It is responsible for creating tasks and assigning attributes to them.

// //Select Elements
// let taskDesc = document.querySelector('#new-task-description');
// console.log(taskDesc);
// let submitButton = document.querySelector('submit');

document.body.addEventListener('click', deleteTask)

const taskListForm = document.querySelector('#create-task-form');
let i = 0
taskListForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = e.target.querySelector('#new-task-description').value;
    // console.log(newTask);
    const taskListUL = document.querySelector('#tasks')
    const taskNameTemplate = `<li>${newTask} <button id='button${++i}'>Delete</button> </li>`

    taskListUL.innerHTML += taskNameTemplate;

})

function deleteTask(event) {
  if (event.target.tagName === "BUTTON"){
      let eer = event.target.parentElement
      eer.remove()
    // console.log(event.target);
  // var taskID = document.getElementById('Delete');
  // taskID.parentNode.remove()
  }

}
