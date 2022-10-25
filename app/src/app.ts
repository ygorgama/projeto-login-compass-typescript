import { LoginController } from "./controller/LoginController.js";
import { PaginaPrincipalController } from "./controller/PaginaPrincipalContoller.js";

const form = document.querySelector("#form")
const loginController =  new LoginController();


if (form) {
    form.addEventListener("submit",  event =>{
        loginController.login(event)
    })
}


if (location.pathname === '/index.html' || location.pathname === '/') {
    loginController.setInputedPasswordInputedUsername();
}

const mainPageController = new PaginaPrincipalController()

const logoutButton = document.querySelector("#logout")

if (logoutButton) {
    logoutButton.addEventListener('click', () =>{
        mainPageController.logout()
    })
}

if (location.pathname == '/pagina-principal.html') {
    mainPageController.timerLogout();
    mainPageController.dateHandller();
    mainPageController.apiHandller();
}

