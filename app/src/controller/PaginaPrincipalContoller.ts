import { User } from "../model/User";
import { PaginaPrincipalView } from "../view/PaginaPrincipalView.js";

export class PaginaPrincipalController{
    private paginaPrincipalView: PaginaPrincipalView

    constructor(){
        this.paginaPrincipalView = new PaginaPrincipalView();
    }

    public logout():void{
        const userString: string | null = localStorage.getItem('UserLogin'); 

        if (userString) {
            const user = JSON.parse(userString)
            let isTologout = confirm(`Você quer realmente sair ${user.username}?`)
            if (isTologout) {
                location.href = 'index.html'
                localStorage.clear();
                return
            }
            location.reload();

        }        
    }

    public timerLogout(){
        this.paginaPrincipalView.contador(this.logout)
    }

    public dateHandller():void{
        this.paginaPrincipalView.dayView()
        this.paginaPrincipalView.hourView();
    }

    public apiHandller():void {
        if(!navigator.geolocation)return alert('An erro ocurred')
        navigator.geolocation.getCurrentPosition(pos =>{
            this.weatherApiCall(pos.coords.latitude, pos.coords.longitude)

        }, err =>{
            console.log(err);
        }, {enableHighAccuracy:true})
    }

    private async weatherApiCall(latitude: number, longitude: number){
        const key:string = 'd7f766b1eeb849a7a59163414221410'
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}&aqi=no`)
        const items = await response.json();
        this.paginaPrincipalView.weatherView(items.current.condition.icon, items.current.temp_c)
        
        // console.log(response);  
    } 
}