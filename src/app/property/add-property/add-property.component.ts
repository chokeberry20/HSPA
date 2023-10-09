import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  constructor(){

  }

  onSubmit(Form: NgForm){
    console.log("Form is saved!");
    console.log(Form.value['Name'], Form.value["Price"]);
  }
}
