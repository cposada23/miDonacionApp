import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { PreguntaPage } from '../pregunta/pregunta';
import { Auth } from '../../providers/auth';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public app:App, private auth: Auth, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  irLogin(){
    console.log("hola");
    this.navCtrl.push(LoginPage);
  }  

  irDonar(){
    if(this.auth.isAutenticado()){
      this.navCtrl.push(PreguntaPage, {
        pregunta:'¿Qué quieres donar?'
      });
    }else{
      this.showPrompt();
      
    }
  }

  irBeneficio(){
    this.navCtrl.push(PreguntaPage,{
      pregunta: '¿Qué necesitas'
    });
  }

  logout(){
    this.auth.logout();

    this.app.getRootNav().setRoot(HomePage);
  }


   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'INFO',
      message: "Para donar necesitas estar registrado",
      buttons: [
        {
          text: 'login',
          handler: data => {
            this.navCtrl.push(LoginPage,{
              vieneADonar:true
            });
          }
        },
        {
          text: 'registro',
          handler: data => {
            this.navCtrl.push(RegistroPage,{
              vieneADonar:true
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
