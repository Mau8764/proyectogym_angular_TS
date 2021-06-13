import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { Cliente } from '../models/clientes';
import { AngularFirestore } from '@angular/fire/firestore';
import { Precio } from '../models/precio';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
  inscripcion:Inscripcion=new Inscripcion()
  clienteseleccionado:Cliente= new Cliente()
  precios:Precio[]=new Array<Precio>()
  precioseleccionado:Precio=new Precio()
  idprecio:string='null'
  constructor(private db:AngularFirestore,private msj:MensajesService) { }

  ngOnInit(): void {
    this.db.collection('precios').get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
        let precio=item.data() as Precio
        precio.id=item.id
        precio.ref=item.ref
        this.precios.push(precio)
      })
    })
  }


  asignarcliente(cliente:Cliente){
    this.inscripcion.cliente=cliente.ref
    this.clienteseleccionado=cliente
  }
  
  eliminarcliente(){
    this.clienteseleccionado=new Cliente()
    this.inscripcion.cliente=undefined
  }


  guardar()
  {
    if(this.inscripcion.validar().esvalida)
    {
      let inscripcionagregar={
        fecha:this.inscripcion.fecha,
        fechafinal:this.inscripcion.fechafinal,
        cliente:this.inscripcion.cliente,
        precios:this.inscripcion.precios,
        subtotal:this.inscripcion.subtotal,
        IVA:this.inscripcion.IVA,
        total:this.inscripcion.total,
      }
      this.db.collection('inscripciones').add(inscripcionagregar).then((resultado)=>{
        this.inscripcion=new Inscripcion()
        this.clienteseleccionado=new Cliente()
        this.precioseleccionado=new Precio()
        this.idprecio='null'
        
        this.msj.mensajecorrecto('Guardado','Guardado correctamente')

      })
    }
    else
    {
      this.msj.mensajeadvertencia('Abvertencia',this.inscripcion.validar().mensaje)
    }
  }

  seleccionarprecio(id:string)
  {

    if (id !="null")
    {
      this.precioseleccionado=this.precios.find(x=> x.id==id)
      this.inscripcion.precios=this.precioseleccionado.ref
      
      this.inscripcion.subtotal=this.precioseleccionado.costo
      this.inscripcion.IVA=this.inscripcion.subtotal*0.15
      this.inscripcion.total=this.inscripcion.subtotal+this.inscripcion.IVA
      this.inscripcion.fecha=new Date()
  
      if(this.precioseleccionado.tipoduracion==1)
      {
        let dias :number=this.precioseleccionado.duracion
        let fechafinal= new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),
        this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechafinal=fechafinal
        //fecha final =precioseleccionado.duracio*1
      }
      if(this.precioseleccionado.tipoduracion==2)
      {
        let dias :number=this.precioseleccionado.duracion*7
        let fechafinal= new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),
        this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechafinal=fechafinal
        //fecha final =precioseleccionado.duracio*7
      }
      if(this.precioseleccionado.tipoduracion==3)
      {
        let dias :number=this.precioseleccionado.duracion*15
        let fechafinal= new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),
        this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechafinal=fechafinal
        //fecha final =precioseleccionado.duracio*15
      }
      if(this.precioseleccionado.tipoduracion==4)
      {
        let meses=this.precioseleccionado.duracion
        let fechafinal= new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth()+meses,
        this.inscripcion.fecha.getDate())
        this.inscripcion.fechafinal=fechafinal
        //fecha final =this.inscripcion.fecha agregar un mes precioseleccionado.duracion
      }
      if(this.precioseleccionado.tipoduracion==5)
      {
        let años=this.precioseleccionado.duracion
        let fechafinal= new Date(this.inscripcion.fecha.getFullYear() +años,this.inscripcion.fecha.getMonth(),
        this.inscripcion.fecha.getDate())
        this.inscripcion.fechafinal=fechafinal
        //fecha final =this.inscripcion.fecha agregar los años precioseleccionado.duracion
      }
    }
    else
    {
      this.precioseleccionado = new Precio()
      this.inscripcion.precios=null
      
      this.inscripcion.subtotal=0
      this.inscripcion.IVA=0
      this.inscripcion.total=0
      this.inscripcion.fecha=null
      this.inscripcion.fechafinal=null
    }


    
  }
}
