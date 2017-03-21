import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth } from '../providers/auth';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, private auth:Auth, private af:AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("this.hldfksadf", this.auth.isAutenticado());
      let subscriber = this.af.auth.subscribe(auth => {
        if(auth){
          this.rootPage = TabsPage;
        }
        else{
          this.rootPage = HomePage;
        }
        subscriber.unsubscribe();
      });

      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }
}
