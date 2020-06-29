import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/shared/header/header.component';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ]
})
export class UsersModule { }