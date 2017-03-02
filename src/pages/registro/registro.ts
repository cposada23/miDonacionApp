import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the Registro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  form: FormGroup;
  loader:any;
  constructor(public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public toastCtrl:ToastController) {
    this.form = this.formBuilder.group({
      email:     ['', Validators.required],
      password:  ['', Validators.required],
      confirm:   ['', Validators.required],
      nombre:    ['', Validators.required],
      apellidos: ['', Validators.required],
      universidad:['', Validators.required],
      carrera: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

   registro (){
    const usuario = this.form.value;
    this.presentloading();
    /*if(usuario.password !== usuario.confirm){
      this.presentToast("las contraseñas no coinciden");
    }else{
      this.auth.registro(usuario.email, usuario.password).then((auth)=>{
        this.auth.setuserId(auth.uid);
        let u = {
          nombre: usuario.nombre,
          apellidos: usuario.apellidos, 
          email: usuario.email, 
          universidad: usuario.universidad,
          carrera: usuario.carrera,
          genero: usuario.genero,
          downloads:0,
          seguidores: 0,
          seguidos: 0,
          materias: 0,
          archivos: 0
        }
        this.auth.guardarUsuario(u, auth.uid).then(()=>{
          
          this.auth.makeRequestRegistro(auth.uid).then(()=>{
            
            this.loader.dismiss();
            this.navCtrl.setRoot(TabsPage);

          }).catch(error=>{
            
            this.presentToast(error.message);
            this.loader.dismiss();
          });

        }).catch(error=>{
          console.error(error);
          this.presentToast(error.message);
          this.loader.dismiss();
        });

      }).catch(error=>{
        console.error(error);
        this.presentToast(error.message);
        this.loader.dismiss();
      });
    }*/
    
  }

  presentToast(mensaje){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration:3000
    });
    toast.present();
  }

  irLogin(){
    this.navCtrl.pop();
  }
  isPasswordMatch() {
        const val = this.form.value;
        return val && val.password && val.password == val.confirm;
    }

    presentloading(){
    this.loader = this.loadingCtrl.create({
      content:"Registrando..."
    });
    this.loader.present();
  }

}
