import { Routes } from '@angular/router';
import { BaseComponent } from './components/base/Base.component';
import { BasketComponent } from './components/basket/Basket.component';
import { ProductsComponent } from './components/products/Products.component';
import { ProductDetailsComponent } from './components/products-details/ProductDetails.component';
import { BeatResolver } from './services/beat.resolver';

export const routes: Routes = [
  { path: '', title: 'base', component: BaseComponent },
  { path: 'products', title: 'products', component: ProductsComponent },
  { path: 'products/:id', title: 'product-detail', component: ProductDetailsComponent, 
  resolve: {data: BeatResolver} 
},
  { path: 'basket', title: 'basket', component: BasketComponent },

  {
    path: '**',
    redirectTo: '',
    component: BaseComponent,
  },
];
