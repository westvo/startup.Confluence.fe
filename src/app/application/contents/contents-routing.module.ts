import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents.component';
import { ContentComponent } from './content/content.component';
import { ViewComponent } from './view/view.component';


const contentsRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        component: ContentsComponent,
        children: [
            { path: '', redirectTo: 'view', pathMatch: 'full' },
            { path: 'view', component: ViewComponent },
            { path: 'view/:id', component: ViewComponent },
            { path: 'content', component: ContentComponent },
            { path: 'content/:id', component: ContentComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contentsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContentsRoutingModule { }