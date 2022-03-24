import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  FormControl1 = new FormControl('', [Validators.required]); 
  FormControl2 = new FormControl('', [Validators.required]); 

}
