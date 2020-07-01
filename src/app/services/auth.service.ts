import { Injectable } from '@angular/core';

/* importar mais um cara para fazer o roteamento de pag e ativar*/
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private router: Router, private user: UserService
//UserService = serviço do usuário
  ) { }


//metodo de ativação, pergunta se o usuario está atenticado
//métodos assincronos (CanActivate interrompe rotas)
 async canActivate(route){
   if (await this.user.isAuthenticated()) {
     return true;
   }

   this.router.navigate(['/login']);
   return false;
 }


}
