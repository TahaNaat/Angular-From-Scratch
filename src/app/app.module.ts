import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ResidencesComponent } from './components/residences/residences.component';

@NgModule({
  declarations: [
    //decalartaion nal9a feha ya composant tabaa el module APP
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
  ],
  imports: [
    //importer des modules externs
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent], //c pour declarer le composant racine
})
export class AppModule {}
