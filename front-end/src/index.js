// 4. Create DOM Content Loaded and form submit event listeners

document.addEventListener('DOMContentLoaded', function(){

  const newTaskForm = document.getElementById('form')
  const taskList = document.getElementById('taskList')
  const newTaskDescription = document.getElementById('newTaskDescription')
  const newTaskPriority = document.getElementById('newTaskPriority')

  newTaskForm.addEventListener('submit', function(event){
    event.preventDefault();

    // 5. Set up form submit event listener to create new tasks
    const newTask = new Task({
      id: taskStore[taskStore.length - 1].id + 1,
      description: newTaskDescription.value,
      priority: newTaskPriority.value,
      completed: false
    })

    // 6. Call render task functions
    const taskLi = newTask.createLi()
    taskList.append(taskLi);

    // 10.  Call new task function
    newTask.createTask();
  })

  // 13. Set up a click event listener on the task list
  taskList.addEventListener('click', function(event){
    const eventId = event.target.id

    // 14. If there is no event.target.id, exit the event listener
    if(eventId.length === 0){
      return
    }

    if(eventId.includes('delete-button')){
      // 15. Find the relevant task in taskStore
      const foundTask = taskStore.find((task) => {
        return eventId === `delete-button-${task.id}`
      })

      // 16. Call delete task functions
      taskList.removeChild(event.target.parentElement)
      foundTask.deleteTask()
    }
    else if(eventId.includes('checkbox')){
      // 18. Find relevant task in taskStore
      const foundTask = taskStore.find((task) => {
        return eventId === `checkbox-${task.id}`
      })

      // 19. Call edit task functions
      foundTask.completed ? foundTask.completed = false : foundTask.completed = true;
      foundTask.editTask()
    }
  })

  // 12. Set up request to fetch all existing tasks on page load
  fetch('http://localhost:3000/tasks')
  .then(response => response.json())
  .then(data => {
   for (let i of data) {
     const newTask = new Task(i)
     const taskLi = newTask.createLi()
     taskList.append(taskLi)
   }
  })

})
