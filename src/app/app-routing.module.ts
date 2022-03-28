import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"user",
    loadChildren: () => import("./user/user.module").then(m =>m.UserModule)
  },

  {
    path:"data-binding",
    loadChildren: () => import("./data-binding/data-binding.module").then(m =>m.DataBindingModule)
  },

  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
