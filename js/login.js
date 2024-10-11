const email2 = document.getElementById("email2")

//valida email
const validarEmail = (email)  =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} 


document.getElementById("login_form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form behavior
    
    const email = email2.value
    const isvalue = validarEmail(email);
    const password = document.getElementById("password").value;

    // Login validation logic
    if(isvalue && password !== "") {

        alert("Login bem-sucedido!");
        window.location.href = "/kanban_page/kanban.html"
    } else {
        alert("Login ou senha inválidos!");
    }
});

function kanbanPage(){
    window.location.href = "/kanban_page/kanban.html"

}
