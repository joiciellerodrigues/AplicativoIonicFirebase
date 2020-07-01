import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router  } from '@angular/router';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private username: string;
  private password: string;
  private cpassword: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    public router: Router,
    private alert: AlertController) { }

  ngOnInit() {
  }

  async signUp(){
    const {username, password, cpassword} = this;
    if(password != cpassword){
      this.showAlert('Error!', 'Senha não confere');
      return console.error('Senha não confere!');
    }else{
      try {
        const response = await this.angularFireAuth.createUserWithEmailAndPassword(
          username + '@', password);
        console.log(response);
        this.showAlert('Sucesso!', 'Bem Vindo ao BioClin');
        this.router.navigate(['/tabs']);
      } catch (error) {
      console.dir(error);
      this.showAlert('Error!: ', error.message);
      if(error.code === "auth/user-not-found"){
        console.log('Usuário não encontrado');
      } /*
      if(error.code === "auth/user-not-found"){
        console.log('Usuário não encontrado');
      } */
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Okay'],
    });
    await alert.present();
  }

}
