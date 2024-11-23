import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './components/residences/residences.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path : 'home', component: ResidencesComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path : '**', component: NotFoundComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
