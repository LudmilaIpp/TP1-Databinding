import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ProductosComponent} from './productos/productos.component';

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  }
];

