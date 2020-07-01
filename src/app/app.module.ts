import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/***** importações realizadas*/ 
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';

/* serviços */
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { UserService } from './services/user.service';

import { SharedModule } from './shared/shared.module'; //modificar a navegação

/*Não importar os serviços mas trazer o modulo de compartilhamento*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //back-end
    AngularFireStorageModule,
    AngularFireAuthModule, //autenticar usuario
    AngularFirestoreModule,
    SharedModule
  ],

  providers: [ //modulos
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService, //usuario ativo ou nao
    AuthService  //serviço autorizado, vai trazer o usuario

    /*p/ trocar a navegação, vou precisar ter a resposta de 2 serviços */

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

