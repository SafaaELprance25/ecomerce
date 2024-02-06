import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {







  // Property to track if the message has been sent
  messageSent: boolean = false;
  
  // Initialize the form group with form controls
  UserForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-]+$/)]),
    subject: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+?1?\\d{9,15}$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor() { }

  // Method to handle form submission
  onSubmit(): void {
    if (this.UserForm.valid) {
      // Here you can implement the logic to send the form data to a server or service
      console.log('Form Data: ', this.UserForm.value);
      
      // Set messageSent to true to show the confirmation message
      this.messageSent = true;
      
      // Optionally, reset the form after submission
      this.UserForm.reset();
      
      // Hide the message after a few seconds
      setTimeout(() => this.messageSent = false, 3000);
    }
  }
}