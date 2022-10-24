import { User } from "../model/User.js";
import { ErrorView } from "../view/ErrorView.js";
export class LoginController {
    constructor() {
        this.inputUsername = document.querySelector("#username");
        this.inputPassword = document.querySelector("#password");
    }
    login(event) {
        event.preventDefault();
        const isError = this.checkError();
        if (isError) {
            this.clear();
            ErrorView.createHtml();
            return;
        }
        const user = new User(this.inputUsername.value, this.inputPassword.value);
        localStorage.setItem('UserLogin', JSON.stringify(user));
        location.href = 'pagina-principal.html';
    }
    checkError() {
        let isError = false;
        if (this.inputUsername.value === '' || this.inputPassword.value === '') {
            isError = true;
        }
        else if (this.inputUsername.value === null || this.inputPassword.value === null) {
            isError = true;
        }
        else if (this.inputUsername.value === undefined || this.inputPassword.value === undefined) {
            isError = true;
        }
        else if (this.inputUsername.value !== "admin" || this.inputPassword.value !== "admin") {
            isError = true;
        }
        return isError;
    }
    clear() {
        this.inputUsername.value = '';
        this.inputPassword.value = '';
    }
    inputCheck(event) {
        const target = event.target;
        if (target) {
            return target.value;
        }
    }
    setInputedPasswordInputedUsername() {
        let passwordInput = document.querySelector("#password");
        passwordInput.addEventListener('input', (event) => {
            this.inputedPassword = this.inputCheck(event);
            this.activateStyle();
        });
        let usernameInput = document.querySelector("#username");
        usernameInput.addEventListener('input', event => {
            this.inputedUsername = this.inputCheck(event);
            this.activateStyle();
        });
    }
    activateStyle() {
        const formsControl = document.querySelectorAll('.form__control');
        if (typeof this.inputedPassword !== 'undefined' && typeof this.inputedUsername !== 'undefined') {
            if (this.inputedUsername.length > 0 && this.inputedPassword.length > 0) {
                for (const formControl of formsControl) {
                    formControl.classList.add('form__full');
                    formControl.classList.remove('form__empty');
                }
            }
            else {
                for (const formControl of formsControl) {
                    formControl.classList.add('form__empty');
                    formControl.classList.remove('form__full');
                }
            }
        }
    }
}
