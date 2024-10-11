const emailInput = document.getElementById("email")
const nameInput = document.getElementById("name")
const resultMessage = document.getElementById("resultMessage")
const resultMessageName = document.getElementById("resultMessageName")
const formSubscribe = document.getElementById("form_subscribe")
const congratulation = document.getElementById("congratulation")

//validate email
const validarEmail = (email)  =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} // aqui ta ok ( o validador )

//validate name
const validaName = (name) =>{
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/
    return regex.test(name)
}


formSubscribe.addEventListener("submit", function (event){
    event.preventDefault()
    mensagemvalid()
})


function mensagemvalid () {

    //message to let you know whether the email is valid or not
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
    //message to notify if name is valid
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

// save files to localStorage

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



