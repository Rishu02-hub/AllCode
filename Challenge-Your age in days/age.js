function ageInDays() {
    let birthYear = prompt('What year were you born in: ');
    let ageDays = (2021 -birthYear) * 365;
    let textAnswer = document.createTextNode('You are'+ ageDays+'days old');
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result-2').append(h1)
}


function reset() {
    
    document.getElementById('ageInDays').remove();
}
