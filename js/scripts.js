const emailInput = document.getElementById("email")
const nameInput = document.getElementById("name")
const resultMessage = document.getElementById("resultMessage")
const resultMessageName = document.getElementById("resultMessageName")
const formSubscribe = document.getElementById("form_subscribe")
const loginForm = document.getElementById("login_form")
const congratulation = document.getElementById("congratulation")
const email2 = document.getElementById("email2")
const senhaInput = document.getElementById("password")


//valida email
const validarEmail = (email)  =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} // aqui ta ok ( o validador )

//valida nome
const validaName = (name) =>{
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/
    return regex.test(name)
}

const validPassword = (password)=> {
   return password !== ''
    
}

formSubscribe.addEventListener("submit", function(event){
    event.preventDefault()
    
    mensagemvalid()
   
})



function salveData(){
    const email = emailInput.value
    const isValid = validarEmail(email)
    const name = nameInput.value
    const isValidName = validaName(name)

    if(isValid && isValidName){
        localStorage.setItem("email", emailInput.value)
        localStorage.setItem("name", nameInput.value)
        congratulation.textContent = "Congratulation, successful registration!!"
    }
    setTimeout(() => {
        congratulation.textContent = ""
    },3000)
}

// valid login

function ValidLogin (){
    
    let emailLogin = email2.value;
    let isEmailValid = validarEmail(emailLogin);
    let senha = senhaInput.value;
    let isSenhaValid = validPassword(senha);

    if (isEmailValid && isSenhaValid) {
        kanbanPage();
    } else {
        alert("Login inválido! Verifique seu email e senha.");
    }

}

loginForm.addEventListener("submit", function(event){
    event.preventDefault()

    ValidLogin()
})


function mensagemvalid () {

    //mensagem para avisar se e-mail e valido ou não
    const email = emailInput.value
    const isValid = validarEmail(email)
    const name = nameInput.value
    const isValidName = validaName(name)


    if(isValid) {  
        resultMessage.textContent = "E-mail válido!"
        resultMessage.style.color = "green"
    }else {
        resultMessage.textContent = "E-mail inválido!"
        resultMessage.style.color = "red"
        alert("E-mail invalido! Por favor preencha seu e-mail corretamente")
    }
    //mensagem para avisar se nome esta valido
    if(isValidName) {
        resultMessageName.textContent = "Nome válido!"
        resultMessageName.style.color = "green"
    } else {
        resultMessageName.textContent = "Nome inválido!"
        resultMessageName.style.color = "red"
        alert("Nome invalido! Por favor preencha seu nome corretamente")
    }

    if(isValid && isValidName){
        salveData()
    }
}


// navigation between pages 

function loginpage(){
    window.location.href = "/login/login.html"
}


function kanbanPage(){
    window.location.href = "/kanban_page/kanban.html"

}

function home(){
    window.location.href = "../index.html"
}


