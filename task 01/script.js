let input = document.querySelector('.text-box');
let addBtn = document.querySelector('.add-button');
let tasks = document.querySelector('.tasks');



// add btn disabled

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
       addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})


//add new item to list

addBtn.addEventListener('click', () => { 
    if (input.value.trim() != 0) { 
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa fa-check" style="font-size:25px;color:green" data-toggle="tooltip" data-placement="bottom"title="CHECK"></i>
            <i class="fa-solid fa-trash-can" style="font-size:20px;color:red" data-toggle="tooltip" data-placement="bottom"title="DELETE"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }

})


//delete item from list

tasks.addEventListener('click', (e) => { 
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove();
    }
})


//mark item as completed

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    });

