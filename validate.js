var mail = document.getElementById("username");
var password = document.getElementById("password");

function validate(){
    if((mail.value == 'admin') && (password.value == '12345')){
        success();
    }
    else{
        fail();
    }

}

function success(){
    
}
