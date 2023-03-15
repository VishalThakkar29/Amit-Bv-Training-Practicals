"use strict";
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const sort_el = document.querySelector(".el_sort");
let data = [];
form.addEventListener('submit', (e) => {
    e.preventDefault(); //here it will prevent the page from reloading or refreshing....
    const task = input.value;
    // console.log(task)
    //    if(typeof task==="string"||"number")
    let inp_val = task;
    // console.log(inp_val)
    data.push((inp_val));
    console.log(data);
    //     //sorting
    //   const task_sort_el:HTMLButtonElement = document.createElement('button')!;
    //   task_sort_el.innerText = 'Sorting';
    const task_el = document.createElement('div');
    task_el.classList.add('task');
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    // console.log(task);                                   //it gets the value of the input 
    task_input_el.setAttribute('readonly', 'readonly');
    task_content_el.appendChild(task_input_el);
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';
    //complete
    const task_comp_el = document.createElement('button');
    task_comp_el.classList.add('comp');
    task_comp_el.innerText = 'click to complete';
    //comment
    const task_comment_el = document.createElement('button');
    task_comment_el.classList.add('comm');
    task_comment_el.innerText = 'comment';
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_actions_el.appendChild(task_comp_el);
    task_actions_el.appendChild(task_comment_el);
    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);
    input.value = ''; //to clear the input field once it is clicked
    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_edit_el.innerText = "Save";
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
        }
        else {
            task_edit_el.innerText = "Edit";
            task_input_el.setAttribute("readonly", "readonly");
        }
    });
    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
    });
    task_comp_el.addEventListener('click', (e) => {
        task_input_el.setAttribute("readonly", "readonly");
        task_actions_el.removeChild(task_delete_el);
        task_actions_el.removeChild(task_edit_el);
        task_comp_el.innerText = 'Completed';
    });
    task_comment_el.addEventListener('click', (e) => {
        const msg = document.createElement("input");
        msg.style.backgroundColor = "white";
        task_actions_el.appendChild(msg);
        task_actions_el.removeChild(task_comment_el);
    });
});
//sorting
sort_el.addEventListener("click", (e) => {
    e.preventDefault();
    let dataNew = [...data];
    console.log(dataNew.sort());
});
