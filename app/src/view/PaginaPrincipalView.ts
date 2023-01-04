export class PaginaPrincipalView{
    private seconds: HTMLElement;
    private day: HTMLElement;
    private hour: HTMLElement;
    private graus: HTMLElement;
    private icon: HTMLImageElement;
    private city: HTMLElement;
    constructor(){
        this.seconds = document.querySelector('#seconds') as HTMLElement;
        this.day = document.querySelector('#day') as HTMLElement;
        this.hour = document.querySelector('#hour') as HTMLElement;
        this.graus = document.querySelector('#graus') as HTMLElement;
        this.icon = document.querySelector('#icon') as HTMLImageElement;
        this.city = document.querySelector('#cidade') as HTMLElement;
        
    }

    public contador(logout:Function):void{
        let timeout: number = 10;
        setInterval(() =>{
            this.seconds.innerHTML = `${timeout}`
            if (timeout == 0) {
                logout()
            }
            timeout--;
        }, 1000)
        console.log(timeout);

    }

    public dayView():void{
        const date: Date = new Date(); 
        const options:object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.day.innerHTML = date.toLocaleDateString('pt-br',options);
    }

    public hourView():void{
        setInterval(() =>{
            const date: Date = new Date(); 
            const options:object = {hour: '2-digit', minute:'2-digit'};
            this.hour.innerHTML = date.toLocaleTimeString('pt-br',options);
        }, 100)
    }

    public weatherView(src:string, graus:number, city:string){
        this.graus.innerHTML = `${graus}º`;
        this.icon.src = src;
        this.city.innerHTML = city
    }
}