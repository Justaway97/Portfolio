import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  result: any;
  innerWidth: any;
  innerHeight: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      // buttonToggleControl: [''],
      // checkboxControl: [['A']],
      // inputControl: [''],
      // autoCompleteControl: [''],
      // datePickerControl: [''],
      // radioButtonControl: [''],
      // selectControl: [''],
      // sliderControl: [0]
    })
    this.initFind();
  }

  initFind() {
    this.postFind();
    this.createForm();
  }

  createForm() {
    let resultKeys = Object.keys(this.result);
    for (const key of resultKeys) {
      this.form.addControl(key, new FormControl(this.result[key]));
    }
  }

  postFind() {

  }
}
