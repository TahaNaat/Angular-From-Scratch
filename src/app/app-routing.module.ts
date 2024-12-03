import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './components/residences/residences.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: '', redirectTo: '/residences', pathMatch: 'full' },
  { path: 'details/:id', component: ResidenceDetailsComponent },
  { path: 'addResidence', component: AddResidenceComponent },
  { path: 'updateResidence/:id', component: AddResidenceComponent },
  {path:'apartment/add/:idR',component:AddApartmentComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }