import { LoginController } from "./controller/LoginController.js";
const form = document.querySelector("#form");
const loginController = new LoginController();
if (form) {
    form.addEventListener("submit", event => {
        loginController.login(event);
    });
}
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
loginController.setInputedPasswordInputedUsername();
