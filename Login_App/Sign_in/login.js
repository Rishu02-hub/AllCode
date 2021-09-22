// global variables



function signIn() {
    document.getElementById('usernameId').innerText = '';
    document.getElementById('passwordId').innerText = '';
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