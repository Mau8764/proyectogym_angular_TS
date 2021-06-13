import { DocumentReference } from '@angular/fire/firestore/interfaces'

export class Inscripcion
{
    fecha:Date
    fechafinal:Date
    cliente:DocumentReference
    precios:DocumentReference
    subtotal:number
    IVA:number
    total:number
    constructor()
    {
        this.fecha=null
        this.fechafinal=null
        this.cliente=this.cliente
        this.precios=this.precios
        this.subtotal=this.subtotal
        this.IVA=this.IVA
        this.total=this.total
    }


    validar():any{
        let respuesta = {
            esvalida:false,
            mensaje:''
        }
        if(this.cliente==null || this.cliente==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='Por favor seleccione un cliente'
            return respuesta
        }
        if(this.precios==null || this.precios==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No ha seleccionado un precio'
            return respuesta

        }
        if(this.fecha==null || this.fecha==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No tiene fecha de inicio'
            return respuesta
        }
        if(this.fechafinal==null || this.fechafinal==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No tiene fecha de fin'
            return respuesta

        }

        if(this.subtotal <=0 || this.subtotal==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No se ha podido calcular el subtotal'
            return respuesta

        }
        if(this.IVA<=0 || this.IVA==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No se ha podido calcular el IVA'
            return respuesta

        }
        if(this.total<=0 || this.total==undefined)
        {
            respuesta.esvalida=false
            respuesta.mensaje='No se ha podido calcular el total'
            return respuesta

        }
        respuesta.esvalida=true
        return respuesta
    }
  

}