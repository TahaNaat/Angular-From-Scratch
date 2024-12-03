import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent implements OnInit {
  residence!: FormGroup;
  ngOnInit(): void {
     //<input>
    this.residence = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
      }),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }
  add() {
    console.log(this.residence.get('name')!.value);
    console.log(this.residence.value);
  }
}
