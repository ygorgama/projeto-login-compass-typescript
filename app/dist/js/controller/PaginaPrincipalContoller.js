var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PaginaPrincipalView } from "../view/PaginaPrincipalView.js";
export class PaginaPrincipalController {
    constructor() {
        this.paginaPrincipalView = new PaginaPrincipalView();
    }
    logout() {
        const userString = localStorage.getItem('UserLogin');
        if (userString) {
            const user = JSON.parse(userString);
            let isTologout = confirm(`Você quer realmente sair ${user.username}?`);
            if (isTologout) {
                location.href = 'index.html';
                localStorage.clear();
                return;
            }
            location.reload();
        }
    }
    timerLogout() {
        this.paginaPrincipalView.contador(this.logout);
    }
    dateHandller() {
        this.paginaPrincipalView.dayView();
        this.paginaPrincipalView.hourView();
    }
    apiHandller() {
        if (!navigator.geolocation)
            return alert('An erro ocurred');
        navigator.geolocation.getCurrentPosition(pos => {
            this.weatherApiCall(pos.coords.latitude, pos.coords.longitude);
        }, err => {
            console.log(err);
        }, { enableHighAccuracy: true });
    }
    weatherApiCall(latitude, longitude) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = 'd7f766b1eeb849a7a59163414221410';
            const response = yield fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}&aqi=no`);
            const items = yield response.json();
            this.paginaPrincipalView.weatherView(items.current.condition.icon, items.current.temp_c);
        });
    }
}
