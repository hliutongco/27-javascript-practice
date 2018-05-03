// 1. Create Task class, constructor, and store

const taskStore = []

class Task {
  constructor(object){
    this.id = object.id
    this.description = object.description
    this.priority = object.priority
    this.completed = object.completed
    taskStore.push(this)
  }

  // 7. Create render task function

  render() {
    return `${this.description} | ${this.priority} |
    <input id="checkbox-${this.id}" type="checkbox" ${ this.completed ? 'checked' : '' }> |
    <button id="delete-button-${this.id}">Delete</button>`
  }

  // 8. Create createLi function

  createLi(){
    const taskLi = document.createElement('li')
    taskLi.innerHTML = this.render()
    return taskLi
  }

  // 11. Create createTask fetch request
  createTask(){
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this)
    }).then(response => response.json())
  }

  // 17. Create deleteTask fetch request

  deleteTask(){
    fetch(`http://localhost:3000/tasks/${this.id}`, {
      method: 'DELETE'
    })
  }

  // 20. Create editTask fetch request

  editTask(){
    fetch(`http://localhost:3000/tasks/${this.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({"completed": `${this.completed}`})
    }).then(response => response.json())
  }
}
