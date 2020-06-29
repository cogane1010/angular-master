import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthGuard, } from '@app/_helpers'
import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SharedModule }   from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [AuthGuard],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        SharedModule
    ]    
})

export class AccountModule { }