import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { MensajesService } from '../services/mensajes.service';


@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.scss']
})
export class AgregarclienteComponent implements OnInit {
  formulariocliente:FormGroup
  procentajedesubida:number
  urlimagen:string=''
  eseditable:boolean=false
  id:string
  constructor(private fb:FormBuilder,
    private db :AngularFirestore,
    private storage: AngularFireStorage,
    private activeRoute:ActivatedRoute,
    private msg:MensajesService
    ) { }

  ngOnInit(): void {
        this.formulariocliente=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      cedula:[''],
      fechanacimiento:['',Validators.required],
      telefono:[''],
      imgurl:['',Validators.required]
    })
    
       this.id =this.activeRoute.snapshot.params.clienteID
      if(this.id!=undefined)
      {
        this.eseditable=true
        this.db.doc<any>('clientes/'+this.id).valueChanges().subscribe((cliente)=>{
          this.formulariocliente.setValue({
            nombre:cliente.nombre,
            apellido:cliente.apellido,
            correo:cliente.correo,
            cedula:cliente.cedula,
            fechanacimiento:new Date(cliente.fechanacimiento.seconds*1000).toISOString().substr(0,10),
            telefono:cliente.telefono,
            imgurl:''
          })
  
          this.urlimagen=cliente.imgurl
        })
      }
  


  }

  agregar()
  {
    this.formulariocliente.value.imgurl=this.urlimagen
    this.formulariocliente.value.fechanacimiento=new Date(this.formulariocliente.value.fechanacimiento)
    console.log(this.formulariocliente.value)
    this.db.collection('clientes').add(this.formulariocliente.value).then((termino)=>{
        this.msg.mensajecorrecto('Agregar','Se agregó correctamente')
    }).catch(()=>{

    })
  }
  editar()
  {
    this.formulariocliente.value.imgurl=this.urlimagen
    this.formulariocliente.value.fechanacimiento=new Date(this.formulariocliente.value.fechanacimiento)

    this.db.doc('clientes/'+this.id).update(this.formulariocliente.value).then((resultado)=>{
      this.msg.mensajecorrecto('Editar','Se editó correctamente')
  
    }).catch(()=>{
      this.msg.mensajeerror('Error','Ha ocurrido un error')

    })

  }

  subirimagen(evento)
  {
    if(evento.target.files.length>0)
    {
      let nombreimg= new Date().getTime().toString()
      let foto = evento.target.files[0]
      let extension= nombreimg.toString().substring(foto.name.toString().lastIndexOf('.'))
      let ruta='clientes/'+nombreimg+extension
      const ref=this.storage.ref(ruta)
      const tarea=ref.put(foto)
  
      tarea.then((objeto)=>{
        console.log('imagen subida')
  
        ref.getDownloadURL().subscribe((url)=>
        {
          this.urlimagen=url
        })
      })
  
      tarea.percentageChanges().subscribe((porcentaje)=>{
        this.procentajedesubida=parseInt( porcentaje.toString())
      })
    }
  }



}  
