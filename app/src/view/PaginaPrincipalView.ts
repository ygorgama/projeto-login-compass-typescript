export class PaginaPrincipalView{
    private seconds: HTMLElement;
    private day: HTMLElement
    private hour: HTMLElement
    private graus: HTMLElement
    private icon: HTMLImageElement
    constructor(){
        this.seconds = document.querySelector('#seconds') as HTMLElement
        this.day = document.querySelector('#day') as HTMLElement
        this.hour = document.querySelector('#hour') as HTMLElement
        this.graus = document.querySelector('#graus') as HTMLElement
        this.icon = document.querySelector('#icon') as HTMLImageElement
        
    }

    public contador(logout:Function):void{
        let timeout: number = 600;
        setInterval(() =>{
            this.seconds.innerHTML = String(timeout)
            timeout--
        }, 1000)
        if (timeout === 0) {
            logout()
        }
    }

    public dayView():void{
        const date: Date = new Date(); 
        const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.day.innerHTML = date.toLocaleDateString('pt-br',options)
    }

    public hourView():void{
        setInterval(() =>{
            const date: Date = new Date(); 
            const options:object = {hour: '2-digit', minute:'2-digit'};
            this.hour.innerHTML = date.toLocaleTimeString('pt-br',options)
        }, 100)
    }

    public weatherView(src:string, graus:number){
        this.graus.innerHTML = `${graus}º`
        this.icon.src = src
    }
}