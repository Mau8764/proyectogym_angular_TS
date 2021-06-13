import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListadoinscripcionesComponent } from './listadoinscripciones/listadoinscripciones.component';


const routes: Routes = [

  {
    path:' ',component:ListadoclientesComponent
  },
  {
    path:'listadoclientes', component:ListadoclientesComponent
  },
  {
    path:'agregarcliente',component:AgregarclienteComponent
  },
  {
    path:'agregarcliente/:clienteID',component:AgregarclienteComponent
  },
  {
    path:'precios',component:PreciosComponent
  },
  {
    path:'listadoinscripciones',component:ListadoinscripcionesComponent
  },
  {
    path:'inscripcion',component:InscripcionComponent
  },
  {
    path:'**',component:ListadoclientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
