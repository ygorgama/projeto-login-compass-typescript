import { User } from "../model/User";

export class PaginaPrincipalController{

     logout(){
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
}