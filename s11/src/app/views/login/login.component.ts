import { Component } from '@angular/core';
import { Paises } from 'src/app/models/lists/paises';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:Login = {user:"", password:"",offs:false}

  paises:any[] = [];
  cancelar(){
    this.model = {user:"", password:"",offs:false}
  }
  enviar(){

  }

  ngOnInit(){
    for(let item in Paises){
      if(isNaN(Number(item))){
        this.paises.push({text: item, value: Paises[item]})
      }
    }
  }
}
