const emailInput = document.getElementById("email")
const nameInput = document.getElementById("name")
const resultMessage = document.getElementById("resultMessage")
const resultMessageName = document.getElementById("resultMessageName")
const emailForm = document.getElementById("emailForm")
const subscribe = document.getElementById("subscribe")

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

emailForm.addEventListener("submit", function(event){
    event.preventDefault()

    mensagemEmail()
    mensagemName()
    salveData()
    
})

function salveData(){
    const email = emailInput.value
    const isValid = validarEmail(email)
    const name = nameInput.value
    const isValidName = validaName(name)
    if(isValid && isValidName){
        localStorage.setItem("email", emailInput.value)
        localStorage.setItem("name", nameInput.value)
    }
}


function mensagemEmail () {

    //mensagem para avisar se e-mail e valido ou não
    const email = emailInput.value
    const isValid = validarEmail(email)
    if(isValid) {  
        resultMessage.textContent = "E-mail válido!"
        resultMessage.style.color = "green"
    }else {
        resultMessage.textContent = "E-mail inválido!"
        resultMessage.style.color = "red"
        alert("E-mail invalido! Por favor preencha seu e-mail corretamente")
    }
}

function mensagemName () {
    const name = nameInput.value
    const isValidName = validaName(name)
    //mensagem para avisar se nome esta valido
    if(isValidName) {
        resultMessageName.textContent = "Nome válido!"
        resultMessageName.style.color = "green"
    } else {
        resultMessageName.textContent = "Nome inválido!"
        resultMessageName.style.color = "red"
        alert("Nome invalido! Por favor preencha seu nome corretamente")
    }
    
}


// // salve email no localStorage
// function salveEmail (){

      
       
// }
// //salva nome no localStorage
// function salveName(){
  
    
// }



