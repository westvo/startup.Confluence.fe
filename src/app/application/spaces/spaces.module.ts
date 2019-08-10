import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpacesComponent } from './list-spaces/list-spaces.component';
import { SpaceComponent } from './space/space.component';
import { SpacesComponent } from './spaces.component';
import { SpacesRoutingModule } from './spaces-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { CategoryComponent } from './category/category.component';
 
@NgModule({
  declarations: [ListSpacesComponent, SpaceComponent, SpacesComponent, CategoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SpacesRoutingModule,
    FormsModule,
    HttpClientModule, 
    MatNativeDateModule,
    ReactiveFormsModule,
  ]
})
export class SpacesModule { }
