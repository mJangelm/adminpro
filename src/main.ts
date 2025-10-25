import { platformBrowser } from '@angular/platform-browser'; 
import { AppModule } from './app/app-module'; //de que el archivo se llame app.module.ts

platformBrowser()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
