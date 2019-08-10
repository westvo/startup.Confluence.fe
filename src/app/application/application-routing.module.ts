import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ApplicationComponent } from './application.component';
 

const applicationRoutes: Routes = [ {
    path: '',
    component: ApplicationComponent,
    children: [
  { path: '', redirectTo: 'spaces', pathMatch: 'full' },
  { path: 'spaces',  loadChildren: './spaces/spaces.module#SpacesModule' }, 
]}];

@NgModule({
  imports: [
    RouterModule.forChild(applicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule { }