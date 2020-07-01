import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators'; //mapeando servidor/HTTP


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //comunicação de dados assincrono 
  constructor() { }


}


//Métodos p/ amazenamento de dados, consulta, atualização e etc.



//Carros é uma coleçao json
//payload = carregamento tardio = aguardar o carregamento