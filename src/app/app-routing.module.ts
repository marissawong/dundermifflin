import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'store/history', component: HistoryComponent },
  { path: 'store/cart', component: CartComponent },
  { path: 'store', component: HomeComponent },
  { path: '', component: HomeComponent }
];

// const routes: Routes = [
//   {
//     path: 'store',
//     component: AppComponent,
//     children: [
//       { path: 'history', component: HistoryComponent },
//       { path: 'cart', component: CartComponent },      
//     ]
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
