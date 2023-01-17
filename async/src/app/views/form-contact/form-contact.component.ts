import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  constructor(private formBuilder: FormBuilder){

  }

  formContact = this.formBuilder.group({
      nombres: ['',[Validators.required, Validators.minLength(10)]],
      email: ['',[Validators.required]],
      mensaje: ['',[Validators.required, Validators.maxLength(500)]],
  })

  send(){
    console.log(this.formContact.valid)
  }
}
