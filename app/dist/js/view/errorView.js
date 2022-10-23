export class ErrorView {
    constructor() {
        this.fatherDiv = document.querySelector('form');
        this.buttonSubmit = document.querySelector('#submitButton');
    }
    template() {
        return `
            <p class="form__error" id="error">
                Ops, usuário ou senha inválidos. Tente novamente!
            </p>
        `;
    }
}
