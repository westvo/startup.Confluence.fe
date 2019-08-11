import { ApiService } from './services/apiService';
import { AttributeService } from './services/attributeService';
import { ObjectService } from './services/objectService';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/projectService';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/base/authentication.service'; 
import { GroupService } from './services/groupService';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    AuthenticationService, 
    ProjectService,
    GroupService,
    ObjectService,
    AttributeService,
    ApiService
  ],
  declarations: [
    
  ],
  exports :[ ]
})
export class BaseModule { }
