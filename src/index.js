document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.getElementById('create-task-form')

  form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let input= document.getElementById('new-task-description').value


    let task= document.getElementById('tasks')

    let todo= document.createElement('p')
    todo.textContent = input
    task.appendChild(todo)


    let button = document.createElement('button')
    button.textContent='x'
    todo.appendChild(button)

    button.addEventListener('click',()=>{
      button.parentNode.remove()
    })

    

    form.reset()
  })
  
});
