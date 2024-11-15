//Main tsir feha exe => notre ficher de depart 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; 


platformBrowserDynamic().bootstrapModule(AppModule)//module racine premier modue a exe dans notre App ; tbooti aal modula racine mteena el appmodule
  .catch(err => console.error(err));
//APP module : main.ts 
//APP component : comoposant Racine a trouver dans app module.ts