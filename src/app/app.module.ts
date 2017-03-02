import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/**Registro y login */
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

/**Reactive forms */
import {ReactiveFormsModule} from '@angular/forms';

/** Firebase */
import {firebaseConfig, authConfing} from '../firebase/firebase.config';
import { AngularFireModule } from 'angularfire2/index'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
