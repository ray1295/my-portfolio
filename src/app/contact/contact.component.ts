import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  rForm: FormGroup;
  post:any; // Property for submitted form
  name:'';
  titleAlert: 'This field is required';
  email:'';
  subject:'';
  message: '';

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'subject' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      'message' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
    });
    
  }
  addPost(post) {
    this.name = post.name;
    this.email = post.email;
    this.subject = post.subject;
    this.message = post.message;

  }
  ngOnInit() {
  }

}
