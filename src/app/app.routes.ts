import { Routes } from '@angular/router';
import { BaseComponent } from './components/base/Base.component';
import { BasketComponent } from './components/basket/Basket.component';
import { ProductsComponent } from './components/products/Products.component';
import { ProductdetailsComponent } from './components/products-details/ProductDetails.component';

export const routes: Routes = [
  { path: '', title: 'Base', component: BaseComponent },
  { path: 'products', title: 'Products', component: ProductsComponent },
  { path: 'products/:id', title: 'Base', component: ProductdetailsComponent },
  { path: 'basket', title: 'basket', component: BasketComponent },

  {
    path: '**',
    redirectTo: '',
    component: BaseComponent,
  },
];
