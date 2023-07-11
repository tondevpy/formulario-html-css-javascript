
let reportError = document.getElementById('reportError')
let formulario = document.getElementById('formulario')
let cadastroEfetuado = {nome: '', sobrenome: '', nascimento: '', sexo: '', email: '', senha: '', csenha: ''}

formulario.addEventListener('submit', function (ev) {
    ev.preventDefault()
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let nascimento = document.getElementById('nascimento').value
    let sexo = document.querySelector('input[name="sexo"]:checked')
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let csenha = document.getElementById('csenha').value
    if (nome && sobrenome && nascimento && sexo.value && email && senha && csenha && senha === csenha) {
        if (senha.length < 8) {
            reportError.innerText = 'Senhas devem ser iguais e maior que 7 digitos'
            reportError.style.color = 'rgb(155, 56, 56)'
            reportError.style.border = '1px solid black'
        } else {
            reportError.innerText = 'Cadastro efetuado com sucesso'
            reportError.style.color = 'green'
            reportError.style.border = '1px solid black'
            cadastroEfetuado = {nome: nome, sobrenome: sobrenome, nascimento: nascimento, sexo: sexo.value, email: email, senha: senha, csenha: csenha}
            console.log(cadastroEfetuado)
        }
    } else {
        reportError.innerText = 'Favor preencha todos os campos corretamente e senhas iguais'
        reportError.style.color = 'rgb(155, 56, 56)'
        reportError.style.border = '1px solid black'
    }

})