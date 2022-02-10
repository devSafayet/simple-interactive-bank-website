document.getElementById('login-submit').addEventListener('click', function(){
    //get email user
    const emailField= document.getElementById('user-email');
    const userEmail= emailField.value;
    //get user password
    const passwordField= document.getElementById('user-password');
    const userPassword = passwordField.value;
    //get login 
    if(userEmail=='hamtam@gmail.com' && userPassword=='secret'){
        window.location.href='banking.html';
    }
})