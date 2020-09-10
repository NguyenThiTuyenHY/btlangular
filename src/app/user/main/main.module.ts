import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          {
              path: '', component: HomeComponent
          },
          // {
          //     path: 'user',  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
          // },
          // {
          //     path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
          // },
      ]
  }
];

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
