import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AddApartmentComponent implements OnInit {

  constructor(private _activated: ActivatedRoute) {
  }
  apartment!: FormGroup;

  ngOnInit(): void {
    this.apartment = new FormGroup({
      apartNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      floorNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      surface: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      terrace: new FormControl('', [Validators.required]),
      surfaceterrace: new FormControl('', [
        Validators.pattern('[0-9]+'),
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
    });
    this.apartment.addControl('ResidenceId', new FormControl());
    this.apartment.patchValue({
      ResidenceId: this._activated.snapshot.params['idR']
    });
  }

  add() {
    console.log(this.apartment)
  }
}