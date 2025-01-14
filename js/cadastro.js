document.getElementById('formCadastro').addEventListener('submit', function(event){
    event.preventDefault()

    let emailCadastro = document.getElementById('emailCadastro').value
    let senhaCadastro = document.getElementById('senhaCadastro').value
    let confirmarsenha = document.getElementById('confirmarsenha').value
    let feedbackCadastro = document.getElementById('feedbackCadastro')

    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(confirmarsenha !== senhaCadastro){
        feedbackCadastro.textContent = "As senhas não combinam"
        feedbackCadastro.style.color = "red"
        return;
    }

    if(regex.test(senhaCadastro)){
        localStorage.setItem('email', emailCadastro)
        localStorage.setItem('senha', senhaCadastro)

        feedbackCadastro.textContent = "Conta Criada com sucesso"
        feedbackCadastro.style.color = "green"
    }

    else{
        feedbackCadastro.textContent = "A senha precisa conter: 8 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número"
        feedbackCadastro.color = "red"
    }
})