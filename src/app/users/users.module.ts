import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/shares/header/header.component';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from '../shares/layout/layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
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