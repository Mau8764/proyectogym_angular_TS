import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { NgxSpinnerModule } from "ngx-spinner";
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';  
import { AngularFirestore } from '@angular/fire/firestore';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MensajesService } from './services/mensajes.service';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { SeleccionarclienteComponent } from './seleccionarcliente/seleccionarcliente.component';
import { ListadoinscripcionesComponent } from './listadoinscripciones/listadoinscripciones.component';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadoclientesComponent,
    AgregarclienteComponent,
    PreciosComponent,
    InscripcionComponent,
    SeleccionarclienteComponent,
    ListadoinscripcionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    AngularFireStorageModule,
    ProgressbarModule.forRoot()

  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    MensajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
