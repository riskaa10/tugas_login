const form = document.getElementById('loginform');

console.log(form);

form.addEventListener("submit", function(e ) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
     const password = document.getElementById("password").value.trim();

     if (username === "riska" && password === "24oktober") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
     } else {
        window.location.href = "login ulang.html"
     }
 });
