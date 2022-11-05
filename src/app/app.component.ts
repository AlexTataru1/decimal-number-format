import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'decimal-point';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      decimalInputCurrency: [''],
      letterOnlyInput: ['']
    });
  }

  click(): void {
    const stringToNumber = this.form.controls['decimalInputCurrency'].value.toString().replace(/,/g, '');
    console.log(Number(stringToNumber));
  }
}
