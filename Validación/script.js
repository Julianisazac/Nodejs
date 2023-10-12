// document.addEventListener("DOMContentLoaded", function () {
//     let form = document.getElementById("loginForm");
//     let message = document.getElementById("message");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         let username = form.username.value;
//         let password = form.password.value;
//         if (username.trim() === "") {
//             message.innerText = "Por favor, ingrese un nombre.";
//             message.style.color = "red";
//         } else if (password.trim() === "") {
//             message.innerText = "Por favor, ingrese una contraseña.";
//             message.style.color = "red";
//         } else if (username === "usuario" && password === "1234") {
//             message.innerText = "Inicio de sesión exitoso.";
//             message.style.color = "green";
//             form.reset();
//         }
//         message.classList.remove("hidden");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    function validateUsername(username) {
        return new Promise((resolve, reject) => {
            if (username.trim() === "") {
                reject("Por favor, ingrese un nombre.");
            } else {
                resolve();
            }
        });
    }

    function validatePassword(password) {
        return new Promise((resolve, reject) => {
            if (password.trim() === "") {
                reject("Por favor, ingrese una contraseña.");
            } else {
                resolve();
            }
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        Promise.all([validateUsername(username), validatePassword(password)])
            .then(() => {
                if (username === "usuario" && password === "1234") {
                    message.innerText = "Bienvenido a tu perfil.";
                    message.style.color = "green";
                    form.reset();
                    alert("Bienvenido");
                } else {
                    message.innerText = "Usuario o contraseña incorrectos.";
                    message.style.color = "red";
                    alert("Error");
                }
            })
            .catch((errorMessage) => {
                message.innerText = errorMessage;
                message.style.color = "red";
            })
            .finally ( ()=>{
                message.classList.remove('hidden');
            }

            )
    });
});

