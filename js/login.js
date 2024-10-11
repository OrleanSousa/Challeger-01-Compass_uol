const email2 = document.getElementById("email2")
const senhaInput = document.getElementById("senha")


//valida email
const validarEmail = (email)  =>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} // aqui ta ok ( o validador )


document.getElementById("login_form").addEventListener("submit", function(event){
    event.preventDefault(); // Previne o comportamento padrão do formulário
    
    const email = email2.value
    const isvalue = validarEmail(email);
    const password = document.getElementById("password").value;

    // Lógica de validação do login pode ser adicionada aqui
    if(isvalue && password !== "") {
        alert("Login bem-sucedido!");
        // Redirecionar para outra página, se necessário
        window.location.href = "/kanban_page/kanban.html"
    } else {
        alert("Login ou senha inválidos!");
    }
});

function kanbanPage(){
    window.location.href = "/kanban_page/kanban.html"

}
