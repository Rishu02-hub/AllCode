function addToDO() {
    let new_todo = prompt('New To-Do:');
    let h4 = document.createElement('h4');
    h4.setAttribute('id', 'MyToDO');
    h4.append(new_todo);
    document.getElementById('my_To_Do').append(h4);
    removeAllTODo();

}


function removeAllToDo() {
    document.getElementById('my_To_Do').remove();
}


function removeTODo() {
    /*let remove_btn = document.createElement('button');
    remove_btn.innerText = "Remove";
    document.body.appendChild(remove_btn);
        <button class="btn btn-warning">Remove</button>*/
}

