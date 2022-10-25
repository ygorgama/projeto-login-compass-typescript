import { User } from "../model/User";
import { PaginaPrincipalView } from "../view/PaginaPrincipalView.js";

interface Weather{
    temperatura: number
    icon: string
}

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

    public  dateHandller(): void{
        this.paginaPrincipalView.dayView()
        this.paginaPrincipalView.hourView();
    }

    public  apiHandller():void {
        if(!navigator.geolocation)return alert('An erro ocurred')
        navigator.geolocation.getCurrentPosition(async pos =>{
            const items:Weather = await this.weatherApiCall(pos.coords.latitude, pos.coords.longitude)
            const city:string = await this.locationApiCall(pos.coords.latitude, pos.coords.longitude)

            this.paginaPrincipalView.weatherView(items.icon, items.temperatura, city);
        }, err =>{
            console.log(err);
        }, {enableHighAccuracy:true})
    }

    private async weatherApiCall(latitude: number, longitude: number): Promise<Weather>{
        const key:string = 'd7f766b1eeb849a7a59163414221410'
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}&aqi=no`)
        const date = await response.json();
        const items: Weather = {
            temperatura: date.current.temp_c,
            icon: date.current.condition.icon
        }
        return items

            
        // console.log(response);  
    } 

    private async locationApiCall(latitude:number, longitude:number):Promise<string>{
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=10`)
        const location = await response.json();
        const item: object = {

        }
        return location.address.city
    }
}