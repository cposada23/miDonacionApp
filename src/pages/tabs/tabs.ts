import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController, NavParams, App } from 'ionic-angular';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { PerfilPage } from '../perfil/perfil';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NotificacionesPage;
  tab3Root: any = PerfilPage;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    let id = this.navParams.get('id');
    console.log("idddd", id);
   
  }
}
