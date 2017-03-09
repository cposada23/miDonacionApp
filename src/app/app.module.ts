import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/**Registro y login */
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

/** Auth */
import { Auth } from '../providers/auth';

/**Reactive forms */
import {ReactiveFormsModule} from '@angular/forms';

/** Firebase */
import {firebaseConfig, authConfing} from '../firebase/firebase.config';
import { AngularFireModule } from 'angularfire2/index'; 
import { authConfig } from '../firebase/firebase.config';

/**pregunta  */
import { PreguntaPage } from '../pages/pregunta/pregunta';


/**categorias Bienes */
import { CategoriasBienesPage } from '../pages/categorias-bienes/categorias-bienes';
import { CategoriaService } from '../providers/categoria-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PreguntaPage,
    CategoriasBienesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PreguntaPage,
    CategoriasBienesPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth,
    CategoriaService
  ]
})
export class AppModule {}
