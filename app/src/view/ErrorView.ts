export class ErrorView{

    public static  template():string{
        return `
            Ops, usuário ou senha inválidos. Tente novamente!
        `
    }

    public static createHtml():void{
        const fatherDiv   = document.querySelector('form') as HTMLFormElement
        const buttonSubmit = document.querySelector('#submitButton') as HTMLButtonElement;

        const errorText = document.createElement('p');
        errorText.classList.add('form__error')
        errorText.innerHTML = this.template()

        fatherDiv.insertBefore(errorText, buttonSubmit)
        buttonSubmit.classList.remove('margin-top')
    }
}