import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives/directives.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
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
  path:"storage",
  loadChildren: () => import("./storage/storage.module").then(m =>m.StorageModule)
  },

  {
    path:"post-detail",
    component:PostDetailComponent
  },

  {
    path:"directives",
    loadChildren: () => import("./directives/directives.module").then(m =>m.DirectivesModule)
   },
   {
    path:"pipes",
    loadChildren: () => import("./pipes/pipes.module").then(m =>m.PipesModule,
      )
   },
   {
    path:"parents",
    loadChildren: () => import("./parents/parents.module").then(m =>m.ParentsModule,
      )
   },

   {
    path:"forms",
    loadChildren: () => import("./forms/forms.module").then(m =>m.AngularFormsModule,
      )
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
