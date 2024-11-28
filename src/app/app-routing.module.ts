import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './components/residences/residences.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residence', component: ResidencesComponent },
  { path: '', redirectTo: '/residence', pathMatch: "full" },
  { path: 'details/:id', component: ResidenceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
