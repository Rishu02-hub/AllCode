function equal() {
    document.getElementsByClassName('addBtn');
    let num1 = document.getElementById('num1Id');
    let num2 = document.getElementById('num2Id')
    let addNum = parseInt(num1.value) + parseInt(num2.value);
    console.log(addNum);
    // Displaying on to the webpage:
    let divAnswer = document.createElement('div');
    document.getElementById('answer').append(divAnswer);
    divAnswer.append(addNum).style.top;
}