import { Component, OnInit } from '@angular/core';
import { Residence } from '../../core/models/residence';
//nsobo exten esmha auto imoort tekhdem khedmt import maghir manktbo el code

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  title: string = 'Liste des résidences';
  residences: Residence[] = [];
  hide: boolean = false;
  selectedResidence: Residence = new Residence();
  searchText: string = '';
  ngOnInit() {
    this.residences = [
      {
        id: 1,
        name: 'El fel',
        address: 'Borj Cedria',
        image: '../../assets/images/R1.jpg',
        status: 'Disponible',
      },
      {
        id: 2,
        name: 'El yasmine',
        address: 'Ezzahra',
        image: '../../assets/images/R2.jpg',
        status: 'Disponible',
      },
      {
        id: 3,
        name: 'El Arij',
        address: 'Rades',
        image: '../../assets/images/R3.jpg',
        status: 'Vendu',
      },
      {
        id: 4,
        name: 'El Anber',
        address: 'inconnu',
        image: '../../assets/images/R4.jpg',
        status: 'En Construction',
      },
    ];
    console.log(this.hide);
    console.log(this.selectedResidence);
  }

  showAddress(residence: Residence) {
    this.hide = true;
    this.selectedResidence = residence;
  }

  filterResidence() {
    return this.residences.filter((r) =>
      r.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  listFavoris:Residence[]=[]
  addToFavoris(element:Residence) {
    let index = this.listFavoris.findIndex((r) => r.id == element.id);
    if (index == -1) {
      this.listFavoris.push(element);
    }
    else {
      this.listFavoris.splice(index, 1);
    }
    console.log(this.listFavoris)
  }

  isFavoris(residence: Residence) {
    return this.listFavoris.some((r) => r.id == residence.id);
  }
}
