'use strict'

const toAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


const addTask = function(text) {

    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.innerHTML = text;

    const removeTask = document.createElement('a');
    removeTask.setAttribute('href', '#');
    removeTask.classList.add('task__remove');
    removeTask.innerHTML = '&times;';

    task.append(taskTitle);
    task.append(removeTask);

    return task;

};

//добавление задачи
toAdd.addEventListener('click', e=>{

    let taskDescription = document.getElementById('task__input').value

    if (taskDescription) {

        taskList.append(addTask(taskDescription));

    }

    task__input.value = "" //очистка строки ввода

    e.preventDefault();

    let removing = document.querySelectorAll('.task__remove')
    console.log(removing)
    for(let i of removing){
        i.onclick = function(e){
       
            i.closest('div').remove();

            e.preventDefault();
        }
            
    }

    
    //удаление задачи
    // removing.forEach(function(item) {

    // })

}
)


