let input = document.querySelector(".add-box input"),
    addButton = document.querySelector(".plus"),
    list = document.querySelector(".tasks-list");

/******************************** Adding new task ********************************/
addButton.onclick = function() {
    if(input.value != ''){
        let newTask = document.createElement('span'),
            deleteElement = document.createElement("span"),
            deleteText = document.createTextNode("Delete"),
            completeElement = document.createElement("span"),
            completeText = document.createTextNode("Complete");
           
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';
        completeElement.appendChild(completeText);
        completeElement.className = 'complete'; 

        newTask.textContent = input.value;
        newTask.classList.add('taskBox');
                
        newTask.appendChild(deleteElement);
        newTask.appendChild(completeElement);


        /********************************    Check if the task already there or not ********************************/
        let tasks = document.querySelectorAll(".tasks-list .taskBox"),
            tasksName = [];
        
        tasks.forEach(item => {
            tasksName.push(item.childNodes[0].textContent);
        })
        if(!tasksName.includes(input.value)){
            list.appendChild(newTask);
            input.value = '';
        }
        else{
            alert('Task already exist, change the task name');
        }

    }   /************************  Input is Empty  ***********************/
    else{
        alert("Please Enter a task before adding!!");
    }
}

/*-------------------- Finish & Delete tasks  --------------------*/
document.addEventListener('click', function (e) {
    let tasks = document.querySelectorAll(".tasks-list .taskBox");

    // Delete Task 
    if (e.target.classList.contains('delete')) {
        // Remove Current Task
        e.target.parentNode.remove();
    }

    // Delete All 
    if (e.target.classList.contains('deleteAll')) {
        tasks.forEach(item => {
            item.remove();
        })
    }

    // Complete Task
    if (e.target.classList.contains('complete')) {
        // Toggle Class 'finished'
        e.target.parentNode.classList.toggle("finish");
        e.target.classList.toggle("finish");
    }
  
    // Complete All
    if (e.target.classList.contains('finishAll')) {
        tasks.forEach(item => {
            if(!item.classList.contains("finish")){
                item.classList.toggle("finish");
                item.childNodes[2].classList.toggle("finish");
            }
        })
    }

  });
/*--------------------  --------------------*/