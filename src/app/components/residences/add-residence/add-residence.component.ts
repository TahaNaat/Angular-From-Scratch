import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit{
     residence!: FormGroup;
     ngOnInit(): void {
      this.residence = new FormGroup({
       name : new FormControl(),
       address : new FormControl(),
       image : new FormControl(),
       status : new FormControl(),
     })
}
}