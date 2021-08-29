function addToDO() {
    let new_todo = prompt('New To-Do:');
    let h4 = document.createElement('h4');
    h4.setAttribute('id', 'MyToDO');
    h4.append(new_todo);
    let remove = document.createElement("button");
    remove.innerHTML = '';
    document.getElementById('my_To_Do').append(h4, remove);
    

    
}


function removeAllToDo() {
    document.getElementById('my_To_Do').remove();
}


function removeTODo() {

}

