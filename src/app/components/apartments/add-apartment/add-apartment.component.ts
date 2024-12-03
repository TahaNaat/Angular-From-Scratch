import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent implements OnInit {
  constructor(private activated:ActivatedRoute){

  }
  apartment!: FormGroup;
  ngOnInit(): void {
    this.apartment = new FormGroup({
      apartNum: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      floorNum: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      surface: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      terrace: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      surfaceterrace: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
    });
    this.apartment.addControl('ResidenceId', new FormControl());
    this.apartment.patchValue({
      ResidenceId:this.activated.snapshot.params['idR']
    })
  }
}
