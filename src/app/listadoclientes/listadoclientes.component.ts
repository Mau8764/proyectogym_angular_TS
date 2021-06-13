import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.scss']
})
export class ListadoclientesComponent implements OnInit {
  clientes: any[]=new Array<any>()
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // this.firestore.collection('clientes').valueChanges().subscribe((resultado)=>{
    //   this.clientes=resultado
    //})

    this.clientes.length=0
    this.firestore.collection('clientes').get().subscribe((resultado)=>{
        resultado.docs.forEach((item)=>{
          let cliente = item.data()
          cliente.id= item.id
          cliente.ref=item.ref
          this.clientes.push(cliente)
        })
    })
  }

}
