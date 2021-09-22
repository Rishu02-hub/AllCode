function signUp() {
    let usernameSignUp = document.getElementById('usernameId').value;
    let password = document.getElementById('passwordId').value;
    let confirmPassword = document.getElementById('confirmPasswordId').value;
    let message = document.getElementById('message');
    console.log("usernameSignUp " + usernameSignUp);
    console.log("password " + password);
    console.log("confirmPassword " + confirmPassword);


    // checking user input

    if (usernameSignUp == '' || password === '' || confirmPassword === '') {
        document.getElementById('usernameId').style.border = "2px solid red";
        document.getElementById('passwordId').style.border = "2px solid red";
        document.getElementById('confirmPasswordId').style.border = "2px solid red";
        message.style.border = "2px solid red";
        message.style.color = "red";
        message.innerText = "Please fill the text fields";
        return
    }


    if (password != confirmPassword) {
        console.log('  DGWEDGWQGWBWE     ', document.getElementById('show'));
        document.getElementById('passwordId').style.border = "2px solid black";
        document.getElementById('usernameId').style.border = "2px solid black";
        document.getElementById('confirmPasswordId').style.border = "2px solid red";
        message.style.border = "2px solid red";
        message.style.color = "red";
        message.innerText = "This password isn't the same as the original one!!!";
        return
    }
    if (password === confirmPassword) {
        document.getElementById('confirmPasswordId').style.border = "2px solid black";
        document.getElementById('passwordId').style.border = "2px solid black";
        document.getElementById('usernameId').style.border = "2px solid black";
        console.log('Else if Statment = ', password, confirmPassword);
        message.style.border = "2px solid green";
        message.style.color = "green";
        message.innerText = "You have signed up successfully!!!";

        let signInButton = document.createElement('button');
        let newlink = document.createElement('a');
        newlink.setAttribute('href', "C:/Users/ashish.f.mathur/Ashish/rishith/challenges/Login_App/Sign_in/login.html");
        document.getElementById('signUpBtn').remove();
        signInButton.innerText = 'Got to Sign in Page';
        newlink.appendChild(signInButton);
        let allSignInButtons = document.getElementById('sign_in_buttons');
        allSignInButtons.append(newlink);
        signInButton.setAttribute('class', 'btn btn-success');
        signInButton.setAttribute('id', 'signInButton');
    }

}


function show() {
    let passwordInput = document.getElementById('input_password');
    console.log(passwordInput);
    let passwordShow = document.getElementById('passwordId');
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
    let passwordInput = document.getElementById('input_password');
    let passwordHide = document.getElementById('passwordId');
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
    let passwordInput = document.getElementById('input_confirm_password');
    console.log(passwordInput);
    let passwordShow = document.getElementById('confirmPasswordId');
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
    let passwordInput = document.getElementById('input_confirm_password');
    let passwordHide = document.getElementById('confirmPasswordId');
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