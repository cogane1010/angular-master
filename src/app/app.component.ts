import { Component } from '@angular/core';

import { AccountService } from './_services';
import { AppUser } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: string;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.name;
    }   
}