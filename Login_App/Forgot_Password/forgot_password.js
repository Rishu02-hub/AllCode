function changePassword() {
    let newPassword = document.getElementById('newPasswordId').value;
    let confirmNewPassword = document.getElementById('confirmNewPasswordId').value;
    let message = document.getElementById('message');
    message.setAttribute('id', 'message');
    console.log('message: ', message);

    // checking Username Input
    if (newPassword != confirmNewPassword) {
        //document.getElementById('newPasswordId').style.border = "2px solid red";
        document.getElementById('confirmNewPasswordId').style.border = "2px solid red";
        message.style.border = "2px solid red";
        message.style.color = "red";
        message.innerText = "The New Password isn't the same as the original one!!!";
        //console.log('not same: ', newUsername, confirmNewUsername);
        console.log('message: ', message);
        return
    }
    if (newPassword === confirmNewPassword) {
        document.getElementById('newPasswordId').style.border = "2px solid black";
        document.getElementById('confirmNewPasswordId').style.border = "2px solid black";
        message.style.border = "2px solid green";
        message.style.color = "green";
        message.innerText = "Your password has been changed successfully!!!";
        //console.log('same: ', newUsername, confirmNewUsername);
        console.log('message: ', message);
        // removing change username btn and adding 'go to sign page' btn:
        let signInButton = document.createElement('button');
        let newlink = document.createElement('a');
        newlink.setAttribute('href', "C:/Users/ashish.f.mathur/Ashish/rishith/challenges/Login_App/Sign_in/login.html");
        signInButton.innerText = 'Got to Sign in Page';
        document.getElementById('newPasswordBtn').remove();
        newlink.appendChild(signInButton);
        let newPasswordBtns = document.getElementById('newPasswordBtns');
        //console.log('newUsernameBtns: ', newUsernameBtns)
        newPasswordBtns.append(newlink);
        signInButton.setAttribute('class', 'btn btn-success');
        signInButton.setAttribute('id', 'signInButton');
    }
}

function show() {
    let passwordInput = document.getElementById('inputNewPassword');
    console.log(passwordInput);
    let passwordShow = document.getElementById('newPasswordId');
    passwordShow.type = 'text';
    passwordInput.append(passwordShow);
    let showButton = document.getElementById('show');
    document.getElementById('show').remove();
    let hideButton = document.createElement('button');
    passwordInput.append(hideButton);
    hideButton.innerText = 'Hide 🙈';
    hideButton.setAttribute('class', 'btn btn-dark');
    hideButton.setAttribute('id', 'hide');
    hideButton.addEventListener('click', hide);
}

function hide() {
    let passwordInput = document.getElementById('inputNewPassword');
    let passwordHide = document.getElementById('newPasswordId');
    passwordHide.type = 'password';
    let hideButton = document.getElementById('hide');
    hideButton.remove()
    passwordInput.append(passwordHide);
    let ShowButton = document.createElement('button');
    ShowButton.innerText = 'Show 👁️';
    ShowButton.setAttribute('class', 'btn btn-info');
    ShowButton.setAttribute('id', 'show');
    ShowButton.addEventListener('click', show);
    passwordInput.append(ShowButton);
}

// -----------------------------------------------------------------------------------------------------------------------------------
//                                                          Confirm Text
// -------------------------------------------------------------------------------------------------------------------------------------------


function showConfirm() {
    let passwordInput = document.getElementById('inputConfirmNewUsername');
    console.log(passwordInput);
    let passwordShow = document.getElementById('confirmNewPasswordId');
    passwordShow.type = 'text';
    passwordInput.append(passwordShow);
    let showButton = document.getElementById('show_Confirm');
    document.getElementById('show_Confirm').remove();
    let hideButton = document.createElement('button');
    passwordInput.append(hideButton);
    hideButton.innerText = 'Hide 🙈';
    hideButton.setAttribute('class', 'btn btn-dark');
    hideButton.setAttribute('id', 'hide_Confirm');
    hideButton.addEventListener('click', hideConfirm);
}

function hideConfirm() {
    let passwordInput = document.getElementById('inputConfirmNewUsername');
    let passwordHide = document.getElementById('confirmNewPasswordId');
    passwordHide.type = 'password';
    let hideButton = document.getElementById('hide_Confirm');
    hideButton.remove()
    passwordInput.append(passwordHide);
    let ShowButton = document.createElement('button');
    ShowButton.innerText = 'Show 👁️';
    ShowButton.setAttribute('class', 'btn btn-info');
    ShowButton.setAttribute('id', 'show_Confirm');
    ShowButton.addEventListener('click', showConfirm);
    passwordInput.append(ShowButton);
}