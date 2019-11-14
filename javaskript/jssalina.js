function Login() {


    var account = new Object();
    account.email = document.getElementById('email').value;
    account.password = document.getElementById('password').value;
}

var presstologin = document.getElementById('buttongrey');
presstologin.addEventListener ("click", function(){
console.log('event1')
})

