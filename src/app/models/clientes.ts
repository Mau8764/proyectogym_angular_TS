import { DocumentReference } from '@angular/fire/firestore/interfaces'

export class Cliente
{
    id:string
    nombre:string
    apellido:string
    correo:string
    fechanacimiento:Date
    imgurl:string
    telefono:number
    cedula:string
    ref:DocumentReference
    visible:boolean
    constructor()
    {

        
    }
}