export class PaginaPrincipalView {
    constructor() {
        this.seconds = document.querySelector('#seconds');
        this.day = document.querySelector('#day');
        this.hour = document.querySelector('#hour');
        this.graus = document.querySelector('#graus');
        this.icon = document.querySelector('#icon');
        this.city = document.querySelector('#cidade');
    }
    contador(logout) {
        let timeout = 600;
        setInterval(() => {
            this.seconds.innerHTML = String(timeout);
            timeout--;
        }, 1000);
        if (timeout === 0) {
            logout();
        }
    }
    dayView() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.day.innerHTML = date.toLocaleDateString('pt-br', options);
    }
    hourView() {
        setInterval(() => {
            const date = new Date();
            const options = { hour: '2-digit', minute: '2-digit' };
            this.hour.innerHTML = date.toLocaleTimeString('pt-br', options);
        }, 100);
    }
    weatherView(src, graus, city) {
        this.graus.innerHTML = `${graus}º`;
        this.icon.src = src;
        this.city.innerHTML = city;
    }
}
