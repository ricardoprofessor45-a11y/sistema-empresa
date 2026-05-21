const form = document.getElementById('login-form');
const message = document.getElementById('message');
form.addEventListener('submit', function(event){
event.preventDefault();
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
if(email === "|| password ==="){
message.innerText = 'Preencha todos os campos';
message.style.color = 'red';
return;

}

message.innerText = 'Login realizado com sucesso'
message.style.color = 'green';

});