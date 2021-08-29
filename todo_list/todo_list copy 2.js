function addToDO() {
    let new_todo = prompt('New To-Do:');
    let textTODO = innerHTML.new_todo + '<button class="btn btn-warning">lol</button>';
    textTODO.setAttribute('id', 'MyToDO');
    textTODO.append(textTODO); 
    document.getElementById('my_To_Do').append(textTODO);
    console.log(textTODO);
    
}


function removeAllToDo() {
    document.getElementById('my_To_Do').remove();
}


function removeTODo() {

}

/* let h4 = document.createElement('h4');
h4.setAttribute('id', 'MyToDO');
h4.append(new_todo); */