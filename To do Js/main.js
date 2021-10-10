const submitBtn = document.querySelector('.button__submit-btn');
const deleteBtn = document.querySelector('.button__delete-btn');
const savetBtn = document.querySelector('.button__save-btn');


const task = document.querySelector('.button__task-btn');
const time = document.querySelector('.button__time-btn');


const ul  = document.querySelector('ul');

submitBtn.addEventListener('click', addTask);
function addTask(){
    ul.innerHTML += `<li><h2> ${task.value}</h2> <span>${time.value}</span></li>` ;
    removeComponent();
}

deleteBtn.addEventListener('click', deleteTask);
function deleteTask(){
    ul.innerHTML = '' ;
}

function removeComponent(){

    let components = document.querySelectorAll('li');
    for (let i = 0; i < components.length; i++){
        components[i].addEventListener('click', function(){
            components[i].style.display = 'none';
        })
    }

}

