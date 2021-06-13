import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';
import { Precio } from '../models/precio';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {
  formularioprecios:FormGroup
  precios:Precio[]=new Array<Precio>()
  eseditar:boolean=false
  id:string=''
  constructor(private fb:FormBuilder, private db:AngularFirestore,
    private msg:MensajesService
    ) { }

  ngOnInit(): void {
    this.formularioprecios=this.fb.group({
      nombre:['',Validators.required],
      costo:['',Validators.required],
      duracion:['',Validators.required],
      tipoduracion:['',Validators.required]
    })

     this.mostrarprecio()
  }

  mostrarprecio()
  {
    this.db.collection<Precio>('precios').get().subscribe((resultado)=>{
      this.precios.length=0
      resultado.docs.forEach((dato)=>{
        let precio = dato.data() as Precio
        precio.id=dato.id
        precio.ref=dato.ref
        this.precios.push(precio)
      })
    })
  }

  agregar()
  {
    this.db.collection<Precio>('precios').add(this.formularioprecios.value).then(()=>{
      this.msg.mensajecorrecto('Agregado','Se agregó correctamente')
      this.formularioprecios.reset()
    }).catch(()=>{
      this.msg.mensajeerror('Error','Ha ocurrido un error')
    })

    this.mostrarprecio()
  }
  editarprecio(precio:Precio)
  {
    this.eseditar=true
    this.formularioprecios.setValue({
      nombre:precio.nombre,
      costo:precio.costo,
      duracion:precio.duracion,
      tipoduracion:precio.tipoduracion
    })
    this.id=precio.id
  }
  
  editar()
  {
    this.db.doc('precios/'+this.id).update(this.formularioprecios.value).then(()=>{
       this.msg.mensajecorrecto('Editado','Se editó correctamente')
       this.formularioprecios.reset()
       this.eseditar=false
    }).catch(()=>{
      this.msg.mensajeerror('Error','Ha ocurrido un error')
    })

    this.mostrarprecio()
  }

}
