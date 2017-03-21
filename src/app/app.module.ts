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
import { SubcategoriasBienesPage } from '../pages/subcategorias-bienes/subcategorias-bienes';
import { CategoriaService } from '../providers/categoria-service';
import { BienesPage } from '../pages/bienes/bienes';

/** Tabs */
import { TabsPage } from '../pages/tabs/tabs';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { PerfilPage } from '../pages/perfil/perfil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PreguntaPage,
    CategoriasBienesPage,
    SubcategoriasBienesPage,
    BienesPage,
    TabsPage,
    NotificacionesPage,
    PerfilPage
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
    CategoriasBienesPage,
    SubcategoriasBienesPage,
    BienesPage,
    TabsPage,
    NotificacionesPage,
    PerfilPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth,
    CategoriaService
  ]
})
export class AppModule {}
