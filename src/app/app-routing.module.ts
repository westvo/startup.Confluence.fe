import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 


const routes: Routes = [ 
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', loadChildren: './application/application.module#ApplicationModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
