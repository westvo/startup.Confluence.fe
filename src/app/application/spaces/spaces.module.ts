import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpacesComponent } from './list-spaces/list-spaces.component';
import { SpaceComponent } from './space/space.component';
import { SpacesComponent } from './spaces.component';
import { SpacesRoutingModule } from './spaces-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
 
@NgModule({
  declarations: [ListSpacesComponent, SpaceComponent, SpacesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SpacesRoutingModule
  ]
})
export class SpacesModule { }
