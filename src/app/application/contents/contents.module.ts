import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ViewComponent } from './view/view.component';
import { ContentsComponent } from './contents.component';
import { ContentsRoutingModule } from './contents-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { ListComponent } from './list/list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContentComponent, ViewComponent, ContentsComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContentsRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContentsModule { }
