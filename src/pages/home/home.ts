import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PreguntaPage } from '../pregunta/pregunta';
import { Auth } from '../../providers/auth';
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

  constructor(private auth: Auth, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  irLogin(){
    console.log("hola");
    this.navCtrl.push(LoginPage);
  }  

  irDonar(){
    this.navCtrl.push(PreguntaPage, {
      pregunta:'¿Qué quieres donar?'
    });
  }

  irBeneficio(){
    this.navCtrl.push(PreguntaPage,{
      pregunta: '¿Qué necesitas'
    });
  }

  logout(){
    this.auth.logout();
  }
}
