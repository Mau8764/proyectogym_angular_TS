import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }


  mensajeerror(titulo:string,mensaje:string)
  {
    Swal.fire({
      title:titulo,
      text:mensaje,
      icon:"error"
      
    })
  }


  mensajecorrecto(titulo:string,mensaje:string)
  {
    Swal.fire({
      title:titulo,
      text:mensaje,
      icon:"success"
      
    })
  }

  
  mensajeadvertencia(titulo:string,mensaje:string)
  {
    Swal.fire({
      title:titulo,
      text:mensaje,
      icon:"warning"
      
    })
  }
}
