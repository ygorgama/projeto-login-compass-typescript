export class ErrorView {
    static template() {
        return `
            Ops, usuário ou senha inválidos. Tente novamente!
        `;
    }
    static createHtml() {
        const fatherDiv = document.querySelector('form');
        const buttonSubmit = document.querySelector('#submitButton');
        const errorText = document.createElement('p');
        errorText.classList.add('form__error');
        errorText.innerHTML = this.template();
        fatherDiv.insertBefore(errorText, buttonSubmit);
        buttonSubmit.classList.remove('margin-top');
    }
}
