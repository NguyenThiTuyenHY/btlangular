import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./user/main/main.module').then((m) => m.MainModule),
    },
    {
        path: "/admin",
        loadChildren: () => import('./admin/main/main.module').then((m) => m.MainModule),
    }
  ];
  @NgModule({
    //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}