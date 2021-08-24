function galaxy() {
    let img = document.createElement('img');

    let div = document.getElementById('flex-gen');
    img.src = "https://im3.ezgif.com/tmp/ezgif-3-0609cdc8054b.jpg";
    div.appendChild(img);
}

function galaxy_del() {
    document.getElementById('flex-gen').innerHTML='';
}