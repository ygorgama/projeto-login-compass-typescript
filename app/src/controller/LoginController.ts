import { User } from "../model/User.js";
import { ErrorView } from "../view/ErrorView.js";
type strUnd = string | undefined

export class LoginController{
    private inputUsername: HTMLInputElement;
    private inputPassword: HTMLInputElement;
    private inputedPassword: strUnd;
    private inputedUsername: strUnd;


    constructor(){
        this.inputUsername = document.querySelector("#username") as HTMLInputElement;
        this.inputPassword = document.querySelector("#password") as HTMLInputElement;
    }

    public login(event:Event): void{
        event.preventDefault();
        const isError = this.checkError();

        this.clear()

    
        if (isError) {
            
            ErrorView.createHtml()            
            return
        }
        
        this.inputUsername.classList.add('random')
        const user = new User(this.inputUsername.value, this.inputPassword.value);
        localStorage.setItem('UserLogin', JSON.stringify(user))
        location.href = 'pagina-principal.html'

    }

    private checkError():boolean{
        let isError = false 
        if(this.inputUsername.value === '' || this.inputPassword.value  === ''){
            isError = true
        }else if (this.inputUsername.value  === null || this.inputPassword.value  === null) {
            isError = true
        }else if (this.inputUsername.value  === undefined || this.inputPassword.value  === undefined) {
            isError = true
        }else if (this.inputUsername.value  !== "admin" || this.inputPassword.value  !== "admin") {
            isError = true
        }

        return isError;
    }

    private clear():void{
        this.inputUsername.value = ''
        this.inputPassword.value = ''
    }

    private inputCheck(event:Event): strUnd{
        const target = event.target as HTMLButtonElement;
        if (target){
            return target.value
        }  
    }

    
    public setInputedPasswordInputedUsername():void{
        let passwordInput: HTMLElement = document.querySelector("#password") as HTMLInputElement;  
        passwordInput.addEventListener('input', (event) => {
            this.inputedPassword = this.inputCheck(event)
            
            this.activateStyle()
        })     


        let usernameInput: HTMLElement = document.querySelector("#username") as HTMLInputElement;   
        usernameInput.addEventListener('input', event => {  
            this.inputedUsername = this.inputCheck(event)     
            
            this.activateStyle()
        })       

    }

    private activateStyle():void{
        const formsControl = document.querySelectorAll('.form__control')



            
        
        if (typeof this.inputedPassword !== 'undefined' && typeof this.inputedUsername !== 'undefined') {
            if (this.inputedUsername.length > 0 && this.inputedPassword.length > 0 ) {
                    
                for (const formControl of formsControl) {
                    formControl.classList.add('form__full')
                    formControl.classList.remove('form__empty')
                }

            }else{
                for (const formControl of formsControl) {
                    formControl.classList.add('form__empty')
                    formControl.classList.remove('form__full')
                }
            }
        }
    }
}