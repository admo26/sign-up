function verifyPassword() {  
    var pw = document.getElementById("password").value;
    var conpw = document.getElementById("confirmPassword").value;
    if (pw === conpw){
        return true;
    } else {
        return false;
    }
}