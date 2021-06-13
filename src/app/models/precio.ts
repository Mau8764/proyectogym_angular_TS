import { DocumentReference } from '@angular/fire/firestore/interfaces'

export class Precio{
    id:string
    nombre:string
    costo:number
    duracion:number
    tipoduracion:number
    ref:DocumentReference
}