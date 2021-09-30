const deg = 6;
const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    let hr = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    hour.style.transform = "rotate(" + ((hr) + (min / 12)) + "deg)";
    minute.style.transform = "rotate(" + (min) + "deg)";
    second.style.transform = "rotate(" + (sec) + "deg)";
})