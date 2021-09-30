const cpsBoard = document.getElementById('cpsBoard');
let counter = parseInt(document.getElementById('counter').innerText);
let timer = parseInt(document.getElementById('timer').innerText);
timer = 0;
counter = 0;

let checkCps = () => {
    counter = counter + 1;
    document.getElementById('counter').innerText = counter;
}

setInterval((timing) => {
    timer = timer + 1
    document.getElementById('timer').innerText = timer;
    if (timer >= 10) {
        alert('stop');
        clearInterval(timing);
    }
}, 1000)