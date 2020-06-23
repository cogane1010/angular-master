import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ConfigService, AuthGuard} from '@app/_helpers';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AppRoutingModule } from './app-routing.module';
//import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { HeaderComponent } from '@app/shares/header/header.component';
import { UsersRoutingModule } from './users/users-routing.module';
import { UsersModule } from './users/users.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        UsersModule
    ],    
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        AuthCallbackComponent,
    ],
    providers: [
        ConfigService,
        AuthGuard
        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };