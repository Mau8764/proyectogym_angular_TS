import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Inscripcion } from '../models/inscripcion';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-listadoinscripciones',
  templateUrl: './listadoinscripciones.component.html',
  styleUrls: ['./listadoinscripciones.component.scss']
})
export class ListadoinscripcionesComponent implements OnInit {
  inscripciones:any[]=[]
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.inscripciones.length=0
    this.db.collection('inscripciones').get().subscribe((resultado)=>{
      resultado.forEach((inscripcion)=>{

        let inscripcionobtenida= inscripcion.data()
        inscripcionobtenida.id=inscripcion.id


        this.db.doc(inscripcion.data().cliente.path).get().subscribe((cliente=>{
          inscripcionobtenida.clienteobtenido=cliente.data()
          inscripcionobtenida.fecha = new Date(inscripcionobtenida.fecha.seconds *1000)
          inscripcionobtenida.fechafinal = new Date(inscripcionobtenida.fechafinal.seconds*1000)

          
          this.inscripciones.push(inscripcionobtenida)
        }))
      })
    })
  }

}
