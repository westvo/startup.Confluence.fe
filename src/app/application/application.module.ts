import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { MaterialModule } from '../MaterialModule';
import { ApplicationRoutingModule } from './application-routing.module';
 
@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
