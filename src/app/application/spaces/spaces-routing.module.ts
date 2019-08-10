import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesComponent } from './spaces.component';
import { SpaceComponent } from './space/space.component';
import { ListSpacesComponent } from './list-spaces/list-spaces.component';


const spacesRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        component: SpacesComponent,
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all/:id', redirectTo: 'all', pathMatch: 'full'}, 
            { path: 'all', component: ListSpacesComponent }, 
            { path: ':id/detail', component: SpaceComponent },
            { path: ':id', loadChildren:  '../contents/contents.module#ContentsModule' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(spacesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpacesRoutingModule { }