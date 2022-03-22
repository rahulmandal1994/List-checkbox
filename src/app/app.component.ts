import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  emailFormControl = new FormControl('', [Validators.required]);
  name = 'Angular ' + VERSION.major;
  color:any={
    abc:'primary'
  }
  
}
