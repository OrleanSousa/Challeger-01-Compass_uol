
// navigation between pages 

function loginpage(){
    window.location.href = "/login/login.html"
}

document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default form behavior
    window.location.href = "../index.html"; //Redirects to the desired page
});