import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriasBienesPage } from '../categorias-bienes/categorias-bienes';
 /*
  Generated class for the Pregunta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pregunta',
  templateUrl: 'pregunta.html'
})
export class PreguntaPage {
  pregunta:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.pregunta = this.navParams.get('pregunta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaPage');
  }

  irCategoriasBienes(){
    this.navCtrl.push(CategoriasBienesPage);
  }

}
