import { LoginController } from "./controller/LoginController.js";
import { PaginaPrincipalController } from "./controller/PaginaPrincipalContoller.js";

const form = document.querySelector("#form")
const loginController =  new LoginController();



if (form) {
    form.addEventListener("submit",  event =>{
        loginController.login(event)
    })
}

console.log(location.pathname);

if (location.pathname == '/index.html') {
    loginController.setInputedPasswordInputedUsername();
}

const mainPageController = new PaginaPrincipalController()

const logoutButton = document.querySelector("#logout")

if (logoutButton) {
    logoutButton.addEventListener('click', () =>{
        mainPageController.logout()
    })
}

