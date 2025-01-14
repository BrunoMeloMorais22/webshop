document.getElementById('formLogin').addEventListener('submit', function(event){
    event.preventDefault()
    
    let emailLogin = document.getElementById('emailLogin').value
    let senhaLogin = document.getElementById('senhaLogin').value
    let feedbackLogin = document.getElementById('feedbackLogin')

    const emailSalvo = localStorage.getItem('email')
    const senhaSalva = localStorage.getItem('senha')

    if(emailLogin === emailSalvo && senhaLogin === senhaSalva){
        feedbackLogin.textContent = "Login Bem Sucedido"
        feedbackLogin.style.color = "green"
    }

    else{
        feedbackLogin.textContent = "Email ou Senha Inválidos"
        feedbackLogin.style.color = "red"
    }
})