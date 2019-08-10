import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ViewComponent } from './view/view.component';
import { ContentsComponent } from './contents.component';
import { ContentsRoutingModule } from './contents-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ContentComponent, ViewComponent, ContentsComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContentsRoutingModule
  ]
})
export class ContentsModule { }
