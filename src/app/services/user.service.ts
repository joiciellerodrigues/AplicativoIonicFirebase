import { Injectable } from '@angular/core';
/* */
import { AngularFireAuth } from '@angular/fire/auth'; //recursos de autenticação
import { first } from 'rxjs/operators';
import { auth } from 'firebase'; //reautenticando usu pra aplicação inteira 


//Interface do usuário
interface User {
  username: string;
  uid: string; //Usuario id vem do firebase

}

@Injectable({
  providedIn: 'root'
})

export class UserService {
/*autenticação de usuário
//confirmar o login pelo email
*/
  private user: User;

  constructor( private angularFireAuth: AngularFireAuth) { }


  setUser(user: User){
    this.user = user;
  }

  getUsername(): string{
    return this.user.username;
  }

  updateEmail(newEmail: string){
    //auth() é uma função da interface do firebase que implementa
    //mecanismos de update do usuario logado
    return auth().currentUser.updateEmail(newEmail + '@gnikcah.com');
  }

  updatePassword(newPassword: string){
    return auth().currentUser.updatePassword(newPassword);
  }

 async isAuthenticated(){
    if (this.user) { //existe usuario?
      return true;
    }

    const user = await this.angularFireAuth.authState.pipe(first()).toPromise();
    //Observação de entrada e saida do sistema

    if(user){
      this.setUser(
        {
          username : user.email.split('@')[0], //cortando o @ e zerando tudo que vem depois do @
          uid: user.uid
        }
      );
      return true;
    }
    return false;
  }

//saber qual id ta utilizando
  getUID(){
    return this.user.uid;
  }

//nova atualização = reautorizar o usuário no sistema automaticamente
//caso ele tenha trocado login e senha
  reAuth(username: string, password: string){
    return auth().currentUser.reauthenticateWithCredential(
      auth.EmailAuthProvider.credential(username + '@gnikcah.com', password));
  }

}
