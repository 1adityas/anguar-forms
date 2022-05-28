import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  get alternateEmails(){
    console.log(this.registrationForm.get('alternateEmail') )
    return this.registrationForm.get('alternateEmail')  as FormArray
  }
  registrationForm=this.fb.group({
    firstName:['aditya',[Validators.required,Validators.minLength(3)]],
    lastName:[,[Validators.required]],
    email:[,[Validators.required,Validators.email]],
    password:[],
    confirmPassword:[],
    alternateEmail:this.fb.array([])

  },{Validators})//we will add validators
  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control('')) 
  }

  //  registrationForm=new FormGroup({
  //    firstName:new FormControl(''), 
  //    lastName:new FormControl(''), 
  //    email:new FormControl(''), 
  //    password:new FormControl(''), 
  //    confirmPassword:new FormControl(''), 
  //  })
}
