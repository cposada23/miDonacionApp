import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { RegistroPage } from '../registro/registro';
import { Auth } from '../../providers/auth';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: FormGroup;
 

  loader:any;
  constructor(public auth:Auth, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    
  }

  presentloading(){
    this.loader = this.loadingCtrl.create({
      content:"Autenticando..."
    });
    this.loader.present();
  }

  login(){
    const formValue = this.form.value;
    this.presentloading();
    this.auth.login(formValue.email, formValue.password).then(auth=>{
      console.log(auth);
      this.loader.dismiss();
    
    }).catch(error=>{
      console.error(error);
      //this.presentToast(error.message)
      this.loader.dismiss();
    });
      
  }

  irRegistro(){
    this.navCtrl.push(RegistroPage);
  }


}
