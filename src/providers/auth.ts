import { Injectable, Inject  } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseRef  } from 'angularfire2'; 
import { Usuario } from '../models/usuario';
@Injectable()
export class Auth {
  usuario:Usuario;
  autenticado:boolean = false;
  sdk:any;
  constructor(@Inject(FirebaseRef) fb ,private af: AngularFire, private db: AngularFireDatabase) {
    this.sdk = fb.database().ref();
    this.af.auth.subscribe(auth => {
      if(auth){
        this.autenticado = true;
        this.getUsuarioActivo(auth.uid).subscribe(usuario=>{
          this.usuario = Usuario.fromJson(usuario);
          console.log("Usuario Activo ",this.usuario);
        
        });
      }else{
        this.autenticado = false;
      }
      console.log("en el service",this.autenticado);
    });
   }

   isAutenticado():boolean {
     return this.autenticado;
   }

   getUsuarioActivo(uid){
    return this.db.object('usuarios/'+uid);  
   }


   login(email:string, password:string){
     return this.af.auth.login({email, password});
   }

   logout(){
     
     this.usuario = null;
     return this.af.auth.logout();
   }

   guardarUsuario(usuario:any, uid:string){
     return this.sdk.child("usuarios").child(uid).set(usuario);
   }

   registro(email, password){
    return this.af.auth.createUser({email,password});
  }

   
}
