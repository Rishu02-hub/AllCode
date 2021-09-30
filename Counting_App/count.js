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

let reset = () => {
    number = 0;
    document.getElementById('number_count').innerText = number;
}

let userCount = () => {
    let countInput = document.getElementById('input');
    let number = parseInt(document.getElementById('number_count').innerText);
    document.getElementById('number_count').innerText = countInput.value;
    if (countInput.value = '') {
        document.getElementById('number_count').innerText = 0;
    }
}