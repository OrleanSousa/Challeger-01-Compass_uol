const emailInput = document.getElementById("email")
const nameInput = document.getElementById("name")
const resultMessage = document.getElementById("resultMessage")
const resultMessageName = document.getElementById("resultMessageName")
const emailForm = document.getElementById("emailForm")



emailForm.addEventListener("submit", function(event){
    event.preventDefault()

    const email = emailInput.value
    const name = nameInput.value
    const isValidName = validaName(name)
    const isValid = validarEmail(email)

    //mensagem para avisar se e-mail e valido ou não
    if(isValid) {
        resultMessage.textContent = "E-mail válido!"
        resultMessage.style.color = "green"
    }else {
        resultMessage.textContent = "E-mail inválido!"
        resultMessage.style.color = "red"
    }
    //mensagem para avisar se nome esta valido
    if(isValidName) {
        resultMessageName.textContent = "Nome válido!"
        resultMessageName.style.color = "green"
    } else {
        resultMessageName.textContent = "Nome inválido!"
        resultMessageName.style.color = "red"
    }
})


//valida email
const validarEmail = (email)  =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} // aqui ta ok ( o validador )

const validaName = (name) =>{
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/
    return regex.test(name)
}




