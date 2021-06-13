import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulariologin: FormGroup
  datoscorrecto:boolean=true
  textoerror:string=''
  constructor(public creadordeformulario:FormBuilder,public auth: AngularFireAuth,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formulariologin=this.creadordeformulario.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
      
    })
  }

  ingresar()
  {
    if(this.formulariologin.valid)
      {
        this.spinner.show()
        this.datoscorrecto=true
        this.auth.signInWithEmailAndPassword(this.formulariologin.value.email,this.formulariologin.value.password)
      .then((usuario)=>
        {
        console.log(usuario)
        this.spinner.hide()
        }).catch((error)=>{
          this.datoscorrecto=false
        this.textoerror=error.message
        this.spinner.hide()

        })
      }
      else
      {
        this.datoscorrecto=false
        this.textoerror='Por favor revisa que los datos sean correctos...'
      }
  }
}
