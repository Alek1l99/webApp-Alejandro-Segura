import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  datos!: string;
  showNotification = false;
  isSubmitting = false;
  formularioContacto: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define the form with validators
    this.formularioContacto = this.fb.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.formularioContacto.valid) {
      this.isSubmitting = true; // Disable the button and the form

      // Get the form values
      const formData = this.formularioContacto.value;

      // Set up email parameters
      const params = {
        name: formData.name,
        email: formData.mail,
        subject: formData.subject,
        message: formData.message,
      };

      // Send the email using Email.js
      emailjs.send('service_2t4pbv9', 'template_5aay5i2', params, 'blp9vv4DiSzveFDfh').then(
        (response: EmailJSResponseStatus) => {
          console.log('Email sent:', response);

          // Reset the form and enable the button and form again
          this.formularioContacto.reset();
          this.isSubmitting = false;

          // Show the popup notification
          this.showNotification = true;

          // Optionally, hide the notification after 5 seconds
          setTimeout(() => {
            this.showNotification = false;
          }, 2500); // 2500 milliseconds (2.5 seconds)
        },
        (error) => {
          console.error('Error sending email:', error);
          // You can handle the error here, such as displaying an error message to the user
        }
      );
    }
  }
}
