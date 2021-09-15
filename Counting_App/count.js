function add() {
    let number = parseInt(document.getElementById('number_count').innerText);
    number = number + 1;
    document.getElementById('number_count').innerText = number;

}

function lower() {
    let number = parseInt(document.getElementById('number_count').innerText);
    number = number - 1;
    document.getElementById('number_count').innerText = number;

}