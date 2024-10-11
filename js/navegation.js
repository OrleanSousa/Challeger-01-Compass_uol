const home = document.getElementById("home")
// navigation between pages 

function loginpage(){
    window.location.href = "/login/login.html"
}

document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.location.href = "../index.html"; // Redireciona para a página desejada
});