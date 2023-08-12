import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  onSubmit() {
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Form data submitted:', this.formData);
    // You can add your logic to submit the data to the server or perform any other action here.
  }
}
