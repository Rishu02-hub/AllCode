function changeUsername() {
    let newUsername = document.getElementById('newUsernameId').value;
    let confirmNewUsername = document.getElementById('confirmNewUsernameId').value;
    let message = document.getElementById('message');
    message.setAttribute('id', 'message');
    console.log('message: ', message);

    // checking Username Input
    if (newUsername != confirmNewUsername) {
        document.getElementById('newUsernameId').style.border = "2px solid red";
        document.getElementById('confirmNewUsernameId').style.border = "2px solid red";
        message.style.border = "2px solid red";
        message.style.color = "red";
        message.innerText = "The New Username isn't the same as the original one!!!";
        console.log('not same: ', newUsername, confirmNewUsername);
        console.log('message: ', message);
        return
    }
    if (newUsername === confirmNewUsername) {
        document.getElementById('newUsernameId').style.border = "2px solid black";
        document.getElementById('confirmNewUsernameId').style.border = "2px solid black";
        message.style.border = "2px solid green";
        message.style.color = "green";
        message.innerText = "Your username has been changed successfully!!!";
        console.log('same: ', newUsername, confirmNewUsername);
        console.log('message: ', message);
        // removing change username btn and adding 'go to sign page' btn:
        let signInButton = document.createElement('button');
        let newlink = document.createElement('a');
        newlink.setAttribute('href', "C:/Users/ashish.f.mathur/Ashish/rishith/challenges/Login_App/Sign_in/login.html");
        signInButton.innerText = 'Got to Sign in Page';
        document.getElementById('newUsernameBtn').remove();
        newlink.appendChild(signInButton);
        let newUsernameBtns = document.getElementById('newUsernameBtns');
        console.log('newUsernameBtns: ', newUsernameBtns)
        newUsernameBtns.append(newlink);
        signInButton.setAttribute('class', 'btn btn-success');
        signInButton.setAttribute('id', 'signInButton');
    }
}