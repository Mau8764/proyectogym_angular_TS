import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/clientes';


@Component({
  selector: 'app-seleccionarcliente',
  templateUrl: './seleccionarcliente.component.html',
  styleUrls: ['./seleccionarcliente.component.scss']
})
export class SeleccionarclienteComponent implements OnInit {
  clientes:Cliente[]=new Array<Cliente>()
  @Input('nombre') nombre:string 
  @Output('seleccionocliente') seleccionocliente= new EventEmitter()
  @Output('cancelocliente') cancelocliente = new EventEmitter()
  constructor(private bd:AngularFirestore) { }

  ngOnInit(): void {
    this.bd.collection<any>('clientes').get().subscribe((resultado)=>{
      this.clientes.length=0
      resultado.docs.forEach((item)=>{
        let cliente:any=item.data()
        cliente.id =item.id
        cliente.ref=item.ref
        cliente.visible=false
        this.clientes.push(cliente)
      })
    })
  }

  buscarcliente(nombre:string)
  {
    this.clientes.forEach((cliente)=>{
      if (cliente.nombre.toLowerCase().includes(nombre.toLowerCase()))
      {
        cliente.visible=true
      }
      else
      {
        cliente.visible=false
      }
    })
  }

  seleccionarcliente(cliente:Cliente)
  {
    this.nombre=cliente.nombre + ' ' + cliente.apellido
    this.clientes.forEach((cliente)=>{
      cliente.visible=false
    })
    this.seleccionocliente.emit(cliente)
  }
  
  cancelarcliente()
  {
     this.nombre=undefined
     this.cancelocliente.emit()
  }
}
